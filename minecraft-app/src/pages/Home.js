import Header from './../components/header/Header'

import img1 from '../img/step_bg_1.png';
import img2 from '../img/step_bg_2.png';
import img3 from '../img/step_bg_3.png';

const Home = () => {
    return (
		<>
			<Header />
			<main className="section home">
				<div className="container">
				<h2 className="title-1">Начать игру</h2>
				<div className="image-container">
					<div className="image-wrapper">
						<img src={img1} alt="Image 1" />
						<div className="overlay" id="iWrapOne">
							<h1>1</h1>
							<h3>Скачайте Minecraft 1.16.5</h3>
							<span>Можно использовать не только<br />лицензионную версию.<br />Например, T-Launcher</span>
							<button>Загрузить</button>
						</div>
					</div>
					<div className="image-wrapper">
						<img src={img2} alt="Image 2" />
						<div className="overlay">
							<h1>2</h1>
							<h3>Добавьте сервер:<br /><em>great-minecraft.ru</em></h3>
							<span>Да-да, прямо так и добавляйте - это и есть IP<br />адрес нашего сервера!</span>
							<button id="btnIP">Скопировать IP</button>
						</div>
					</div>
					<div className="image-wrapper">
						<img src={img3} alt="Image 3" />
						<div className="overlay" id="iWrapTwo">
							<h1>3</h1>
							<h3>Играйте</h3>
							<span>Регистрируйтесь на сервере, привязывайте<br />ВКонтакте и погружайтесь в эту потрясающую<br />атмосферу! Заодно можете сразу начинать<br />следить за новостями:</span>
							<button>Подписаться</button>
						</div>
					</div>
				</div>
						{/* <li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								JavaScript, TypeScript, ReactJS, Angular, Redux,
								HTML, CSS, NPM, BootStrap, MaterialUI, Yarn,
								TailwindCSS, StyledComponents
							</p>
						</li> */}
						{/* <li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
						</li> */}
				</div>
			</main>
		</>
	);
}

export default Home;