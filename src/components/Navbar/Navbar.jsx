import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Button } from '../../components';
import { images } from '../../constants';

const Navbar = () => {
	const [click, setClick] = useState(true);
	const handleClick = () => setClick(!click);

	return (
		<nav className={styles.navbar}>
			<div className='container'>
				<div className={styles.navbar__flex}>
					<NavLink to='/' className={styles.logo__container}>
						<img src={images.logo} alt='logo' />
					</NavLink>

					<ul
						className={
							click
								? `${styles.navbar__menu}`
								: `${styles.navbar__menu} ${styles.menu__active}`
						}
					>
						<li className={styles.menu__item}>
							<NavLink
								to='/amazon'
								onClick={() => setClick(true)}
								className={(navData) =>
									navData.isActive
										? `${styles.menu__active} ${styles.menu__link}`
										: `${styles.menu__link}`
								}
							>
								Amazon
							</NavLink>
						</li>
						<li className={styles.menu__item}>
							<NavLink
								to='/walmart'
								onClick={() => setClick(true)}
								className={(navData) =>
									navData.isActive
										? `${styles.menu__active} ${styles.menu__link}`
										: `${styles.menu__link}`
								}
							>
								Walmart
							</NavLink>
						</li>
						<li className={styles.menu__item}>
							<NavLink
								to='/ebay'
								onClick={() => setClick(true)}
								className={(navData) =>
									navData.isActive
										? `${styles.menu__active} ${styles.menu__link}`
										: `${styles.menu__link}`
								}
							>
								eBay
							</NavLink>
						</li>
						<li className={styles.menu__item}>
							<NavLink
								to='/fba'
								onClick={() => setClick(true)}
								className={(navData) =>
									navData.isActive
										? `${styles.menu__active} ${styles.menu__link}`
										: `${styles.menu__link}`
								}
							>
								Other
							</NavLink>
						</li>
						<li className={styles.menu__item}>
							<NavLink
								to='/why'
								onClick={() => setClick(true)}
								className={(navData) =>
									navData.isActive
										? `${styles.menu__active} ${styles.menu__link}`
										: `${styles.menu__link}`
								}
							>
								Why Svetro
							</NavLink>
						</li>
						<li className={styles.menu__item}>
							<NavLink
								to='/contact'
								onClick={() => setClick(true)}
								className={(navData) =>
									navData.isActive
										? `${styles.menu__active} ${styles.menu__link}`
										: `${styles.menu__link}`
								}
							>
								Contact
							</NavLink>
						</li>
						<li className={styles.menu__item}>
							<NavLink
								to='/blogs'
								onClick={() => setClick(true)}
								className={(navData) =>
									navData.isActive
										? `${styles.menu__active} ${styles.menu__link}`
										: `${styles.menu__link}`
								}
							>
								Blogs
							</NavLink>
						</li>
					</ul>

					<div className={styles.contact__flex}>
						<a href='callto:+447915601167'>+44 (791) 560 1167</a>
						<Button btnType={'btn__primary'}>Talk to Us</Button>
					</div>

					<div className={styles.mobile_menu}>
						<img
							src={click ? images.hamburger : images.icon_close}
							alt='menu icon'
							onClick={handleClick}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
