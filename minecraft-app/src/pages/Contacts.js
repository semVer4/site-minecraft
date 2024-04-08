import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
			navigate('/cabinet');
			if (!accessToken) {
			  throw new Error('Access токен не найден');
			}
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
	  <div>
		<h1>User Authentication</h1>
		<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
		<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
		<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
		<button onClick={handleRegister}>Register</button>
		<button onClick={handleLogin}>Login</button>
	  </div>
	);
}

export default Contacts;