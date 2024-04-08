import React, { useEffect, useState } from 'react';
import axios from "axios";

import "./style.css";

const Header = () => {
	const [players, setPlayers] = useState({});

	useEffect(() => {
		axios.get('http://localhost:3001/players')
		.then(response => {
			console.log(response.data);
			setPlayers(response.data);
		})
		.catch(error => {
			console.error('Ошибка при получении списка игроков:', error);
		});
	}, []);

    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Проект твоей <em>Мечты</em>
					</strong>
					<br />great-minecraft.ru
				</h1>
				<div className="header__text">
				<ul>
					<span>{players.online} / {players.max}</span>
					{/* {players.map(player => (
						<li key={player}>{player}</li>
					))} */}
				</ul>
				</div>
				<a href="#!" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;