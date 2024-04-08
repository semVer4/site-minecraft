import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Preloader from "../components/preloader";
import "../components/preloader.css";
import './cabinet.css';

const Cabinet = () => {
	const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Получение информации о пользователе с помощью access токена
        const accessToken = localStorage.getItem('accessToken');
        setLoading(false);
        if (!accessToken) {
          throw new Error('Access токен не найден');
        }
      
        const response = await axios.post('http://localhost:3001/check-auth', { accessToken });
        setUserData(response.data);
      } catch (error) {
        console.error('Ошибка при получении информации о пользователе:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Удаляем access токен из localStorage
    navigate('/contacts');

    setUserData(null); // Очищаем данные о пользователе
  };

  return (
    <main className="section">
      <div lassName="container">
       <h2 className="title-1">Личный кабинет</h2>
        {loading ? <Preloader /> :
          <div className="profile">
          {userData && (
            <div className="header__text">
              <p>Имя пользователя: {userData.username}</p>
              <p>Email: {userData.email}</p>
              <button onClick={handleLogout}  className="btn">Выйти из аккаунта</button>
            </div>
          )}
         </div>
        }
      </div>
    </main>
  );
}

export default Cabinet;