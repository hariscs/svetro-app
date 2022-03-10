import styles from './ProcessCard.module.css';

const ProcessCard = ({ title, subtitle, img }) => {
	return (
		<div className={styles.card}>
			<img src={img} alt='process identifier' />
			<h3 className={styles.card__title}>{title}</h3>
			<p className={styles.card__subtitle}>{subtitle}</p>
		</div>
	);
};

export default ProcessCard;
