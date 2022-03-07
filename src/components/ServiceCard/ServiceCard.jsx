import { NavLink } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = () => {
	return (
		<NavLink to='/service' className={styles.card}>
			<div className={styles.icon}>ico</div>
			<h3 className={styles.card__title}>Amazon Private Label</h3>
			<p className={styles.card__subtitle}>
				We will lead you to build a firm Amazon Private label account and cater
				to your needs as your business grows.
			</p>
			<div className={styles.card__linkFlex}>
				<span>Learn More</span>
				<span className={styles.icon}>ico</span>
			</div>
		</NavLink>
	);
};

export default ServiceCard;
