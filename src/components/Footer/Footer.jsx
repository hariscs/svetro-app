import { Link } from 'react-router-dom';
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
								<a
									href='https://www.youtube.com/channel/UC9vZdbs9RKepzDw2ZnjJqzA'
									className={styles.footer__iconContainer}
								>
									<BsYoutube />
								</a>
							</IconContext.Provider>

							<a
								href='https://facebook.com/svetro.official'
								className={styles.footer__iconContainer}
							>
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
							<a
								href='https://www.linkedin.com/in/svetro-ecommerce-754335230/'
								className={styles.footer__iconContainer}
							>
								<IconContext.Provider
									value={{ color: 'white', className: 'icon' }}
								>
									<BsLinkedin />
								</IconContext.Provider>
							</a>
							<a
								href='https://www.instagram.com/svetro.official/'
								className={styles.footer__iconContainer}
							>
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
							<Link to='/amazon'>Amazon Private Label</Link>
							<Link to='/fba'>Amazon FBA Wholesale</Link>
							<Link to='/walmart'>Walmart Private Label</Link>
							<Link to='/ebay'>Selling on eBay</Link>
							<Link to='/other'>Digital Marketing</Link>
							<Link to='/other'>Web Development</Link>
						</div>
					</div>
					<div className={styles.col__company}>
						<h3 className={styles.col__title}>Company</h3>
						<div className={styles.flex}>
							<Link to='/why'>Why Svetro</Link>
							<Link to='/contact'>Contact Us</Link>
							<Link to='/blogs'>Blogs</Link>
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
