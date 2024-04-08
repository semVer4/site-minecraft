const express = require('express');

const bodyParser = require('body-parser');
const pg = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'minecraft',
  password: '123456',
  port: 5555,
});

const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.get('/', (req, res) => {
//     res.send('Привет, мир!');
// });

app.get('/players', async (req, res) => {
  try {
    // Используйте динамический import() для index.js
    const { fetchPlayers } = await import('./index.js');
    const players = await fetchPlayers();
    res.json(players);
  } catch (error) {
    console.error('Ошибка при получении игроков:', error);
    res.status(500).json({ error: 'Произошла ошибка при получении списка игроков' });
  }
});

// Регистрация пользователя
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Error during registration');
  }
});

// Авторизация пользователя
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      return res.status(401).send('Invalid username or password');
    }
    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid username or password');
    }
    const accessToken = generateAccessToken();
    await pool.query('UPDATE users SET accesstoken = $1 WHERE id = $2', [accessToken, user.id]);
    res.status(200).send({ accessToken });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Error during login');
  }
});

// Проверка авторизации пользователя
app.post('/check-auth', async (req, res) => {
  try {
    const { accessToken } = req.body;
    // Поиск пользователя по access токену
    const user = await pool.query('SELECT * FROM users WHERE accesstoken = $1', [accessToken]);
    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Пользователь не авторизован' });
    }
    res.json({ username: user.rows[0].username, email: user.rows[0].email });
  } catch (error) {
    console.error('Ошибка при проверке авторизации:', error);
    res.status(500).json({ error: 'Ошибка при проверке авторизации пользователя' });
  }
});

// Генерация access токена
function generateAccessToken() {
  return Math.random().toString(36).substr(2, 15);
}

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});