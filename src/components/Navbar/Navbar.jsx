import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

import { images } from '../../constants';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainer}>
				<img src={images.logo} alt='logo' />
			</div>

			<ul>
				{['amazon', 'walmart', 'eBay', 'other', 'who We Are', 'contact'].map(
					(item, i) => (
						<li key={`link-${i}`}>
							<div />
							<NavLink to={`/${item}`}>{item}</NavLink>
						</li>
					)
				)}
			</ul>

			<div className={styles.contact}>
				<a href='/'>+92 343 441 3578</a>
				<button>contact btn</button>
			</div>

			<div className={styles.mobile_menu}>
				<img
					src={click ? images.icon_close : images.hamburger}
					alt='menu icon'
					onClick={handleClick}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
