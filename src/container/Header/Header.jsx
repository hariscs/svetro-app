import styles from './Header.module.css';
import { Button } from '../../components';
import { images } from '../../constants';

const home = {
	title: 'First-class, cutting-edge solutions for your business',
	subtitle:
		'We discover undiscovered markets and give our clients a competitive edge.',
	btntext: 'Get a free Consultation',
};

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__flex}>
					<div className={styles.header__info}>
						<h1 className={styles.header__title}>{home.title}</h1>
						<h2 className={styles.header__subtitle}>{home.subtitle}</h2>
						<Button>{home.btntext}</Button>
					</div>
					<div className={styles.header__img}>
						<img src={images.heroImg} alt='hero' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
