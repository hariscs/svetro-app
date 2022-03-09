import styles from './Header.module.css';
import { Button } from '../../components';

const Header = ({ title, subtitle, btnText, img }) => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__flex}>
					<div className={styles.header__info}>
						<h1 className={styles.header__title}>{title}</h1>
						<h2 className={styles.header__subtitle}>{subtitle}</h2>
						<Button>{btnText}</Button>
					</div>
					<div className={styles.header__img}>
						<img src={img} alt='hero' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
