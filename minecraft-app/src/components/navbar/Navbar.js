import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<em>great</em>-minecraft
					</NavLink>

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Главная
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/donate"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Донат
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/product"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Товары
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/contacts"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Личный кабинет
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
