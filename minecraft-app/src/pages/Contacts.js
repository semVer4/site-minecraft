import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './sign.css';

const Contacts = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [accessToken, setAccessToken] = useState('');
    
	useEffect(() => {
		const fetchUserData = async () => {
		  try {
			// Получение информации о пользователе с помощью access токена
			const accessToken = localStorage.getItem('accessToken');
			if (!accessToken) {
			  throw new Error('Access токен не найден');
			}
			const response = await axios.post('http://localhost:3001/check-auth', { accessToken });
			navigate('/cabinet');
			console.log(response.data)
		  } catch (error) {
			console.error('Ошибка при получении информации о пользователе:', error);
		  }
		};
	
		fetchUserData();
	}, []);

	const handleRegister = async () => {
	  try {
		const response = await axios.post('http://localhost:3001/register', { username, email, password });
		console.log('Registration successful:', response.data);
	  } catch (error) {
		console.error('Error during registration:', error);
	  }
	};
  
	const handleLogin = async () => {
		console.log(accessToken)

	  try {
		const response = await axios.post('http://localhost:3001/login', { username, password });
		console.log('Login successful:', response.data);
		setAccessToken(response.data.accessToken);
		localStorage.setItem('accessToken', response.data.accessToken); // Сохраняем токен доступа в localStorage
		navigate('/cabinet');
	  } catch (error) {
		console.error('Error during login:', error);
	  }
	};
  
	return (
		<main className="section-header">
			<div className="container">
				<h2 className="title-1" id="cabLC">Личный кабинет</h2>

				<div className="form">
					<form>
						<input id="login" type="text" placeholder="Ваш Логин" value={username} onChange={(e) => setUsername(e.target.value)} required />
						<input id="email" type="email" placeholder="Почта" value={email} onChange={(e) => setEmail(e.target.value)} required />
						<input id="password" type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
						<div className="formButton">
							<button type="submit" onClick={handleRegister} className="btn">Регистрация</button>
							<button type="submit" onClick={handleLogin} className="btn" id="btnTwo">Авторизация</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
}

export default Contacts;