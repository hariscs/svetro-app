import { NavLink } from 'react-router-dom';
import { images } from '../../constants';
import {
	BsInstagram,
	BsFacebook,
	BsLinkedin,
	BsTwitter,
	BsYoutube,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__grid}>
					<div className={styles.col__icons}>
						<img src={images.logofooter} alt='logo' />
						<div className={styles.iconFlex}>
							<IconContext.Provider
								value={{ color: 'white', className: 'icon' }}
							>
								<a href='/yt' className={styles.footer__iconContainer}>
									<BsYoutube />
								</a>
							</IconContext.Provider>

							<a href='/fb' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsFacebook />
								</IconContext.Provider>
							</a>
							<a href='/tw' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsTwitter />
								</IconContext.Provider>
							</a>
							<a href='/in' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsLinkedin />
								</IconContext.Provider>
							</a>
							<a href='/ig' className={styles.footer__iconContainer}>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsInstagram />
								</IconContext.Provider>
							</a>
						</div>
					</div>
					<div className={styles.col__services}>
						<h3 className={styles.col__title}>Services</h3>
						<div className={styles.flex}>
							<NavLink to='/amazon'>Amazon Private Label</NavLink>
							<NavLink to='/fba'>Amazon FBA Wholesale</NavLink>
							<NavLink to='/walmart'>Walmart Private Label</NavLink>
							<NavLink to='/ebay'>Selling on eBay</NavLink>
						</div>
					</div>
					<div className={styles.col__company}>
						<h3 className={styles.col__title}>Company</h3>
						<div className={styles.flex}>
							<NavLink to='/why'>Why Svetro</NavLink>
							<NavLink to='/contact'>Contact Us</NavLink>
						</div>
					</div>
					<div className={styles.col__contact}>
						<h3 className={styles.col__title}>Contact</h3>
						<div className={styles.flex}>
							<a href='mailto:info@svetro.com'>info@svetro.com</a>
							<a href='callto:00923434413578'>+92 343 441 3578</a>
							<div className={styles.address}>
								Plaza 25A, Khayaban-e-Iqbal, Sector XX DHA Phase 3, Lahore,
								Punjab 54000, Pakistan
							</div>
						</div>
					</div>
				</div>
				<div className={styles.line}></div>
				<div className={styles.footer__text}>
					Copyright {new Date().getFullYear()} Svetro. All Rights Reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
