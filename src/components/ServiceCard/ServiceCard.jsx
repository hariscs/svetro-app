import { NavLink } from 'react-router-dom';
import styles from './ServiceCard.module.css';
import { images } from '../../constants';

const ServiceCard = ({ icon, title, subtitle, link }) => {
	return (
		<NavLink to={link} className={styles.card}>
			<div className={styles.icon}>
				<img src={icon} alt='icon' />
			</div>
			<h3 className={styles.card__title}>{title}</h3>
			<p className={styles.card__subtitle}>{subtitle}</p>
			<div className={styles.card__linkFlex}>
				<span>Learn More</span>
				<span className={styles.icon}>
					<img src={images.arrow} alt='icon' />
				</span>
			</div>
		</NavLink>
	);
};

export default ServiceCard;
