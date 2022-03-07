import styles from './Card.module.css';

const Card = ({ bgClr, icon, title, subtitle }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card__iconContainer} style={{ background: bgClr }}>
				<img className={styles.card__icon} alt='Icon' src={icon} />
			</div>
			<h3 className={styles.card__title}>{title}</h3>
			<p className={styles.card__subtitle}>{subtitle}</p>
		</div>
	);
};

export default Card;
