import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__grid}>
					<div className={styles.footer__info}>
						<img
							src='/assets/logoVertical.svg'
							alt='logo'
							className={styles.footer__infoImg}
						/>
						<a
							href='callto:00923434413578'
							className={`${styles.flex} ${styles.call}`}
						>
							<span>
								<i class='fas fa-phone-alt'></i>
							</span>
							+92 343 441 3578
						</a>
						<div className={`${styles.flex} ${styles.address}`}>
							<span>
								<i class='fas fa-map-marker-alt'></i>
							</span>
							Plaza 25A, Khayaban-e-Iqbal, Sector XX DHA Phase 3, Lahore, Punjab
							54000, Pakistan
						</div>
						<a
							href='mailto:info@svetro.com'
							className={`${styles.flex} ${styles.email}`}
						>
							<span>
								<i class='fas fa-envelope'></i>
							</span>
							info@svetro.com
						</a>
					</div>
					<div className={styles.footer__nav}>
						<h4 className='links__title'>Company</h4>
						<div className={styles.footer__links}>
							<NavLink to='/about'>About</NavLink>
							<NavLink to='/contact'>Contact</NavLink>
							<NavLink to='/services'>Services</NavLink>
						</div>
					</div>
					<div className={styles.footer__icons}>
						<a href='/yt' className={styles.footer__iconContainer}>
							<i class='fab fa-youtube'></i>
						</a>
						<a href='/fb' className={styles.footer__iconContainer}>
							<i class='fab fa-facebook-f'></i>
						</a>
						<a href='/tw' className={styles.footer__iconContainer}>
							<i class='fab fa-twitter'></i>
						</a>
						<a href='/in' className={styles.footer__iconContainer}>
							<i class='fab fa-linkedin-in'></i>
						</a>
						<a href='/ig' className={styles.footer__iconContainer}>
							<i class='fab fa-instagram'></i>
						</a>
					</div>
				</div>
				<div className={styles.footer__text}>
					Copyright 2022 Svetro. All Rights Reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
