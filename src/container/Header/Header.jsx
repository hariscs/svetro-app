import styles from './Header.module.css';
import { Button } from '../../components';
import { motion } from 'framer-motion';

const Header = ({ title, subtitle, btnText, img }) => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<motion.div
					className={styles.header__flex}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -100 },
					}}
				>
					<div className={styles.header__info}>
						<h1 className={styles.header__title}>{title}</h1>
						<p className={styles.header__subtitle}>{subtitle}</p>
						<Button btnType={'btn__primary'}>{btnText}</Button>
					</div>
					<div className={styles.header__img}>
						<img src={img} alt='hero' />
					</div>
				</motion.div>
			</div>
		</header>
	);
};

export default Header;
