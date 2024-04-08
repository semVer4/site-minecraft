import React, { useEffect, useState } from 'react';
import axios from "axios";

import Preloader from "../preloader";
import "../../components/preloader.css";
import "./style.css";

const Header = () => {
	const [loading, setLoading] = useState(true);

	const [players, setPlayers] = useState({});

	useEffect(() => {
		axios.get('http://localhost:3001/players')
		.then(response => {
			console.log(response.data);
			setLoading(false);
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
						<em>Проект</em> твоей Мечты
					</strong>
					<br /><em>great</em>-minecraft.ru
				</h1>
				<div className="header__text">
				<ul>
					{loading ? <Preloader /> : <span>{players.online} / {players.max}</span>}
					{/* {players.map(player => (
						<li key={player}>{player}</li>
					))} */}
				</ul>
				</div>
				<div className="header__button">
					<a href="#" className="btn">
						Начать игру
					</a>
					<a href="/contacts" className="btn" id="btn-lc">
						Личный кабинет
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;