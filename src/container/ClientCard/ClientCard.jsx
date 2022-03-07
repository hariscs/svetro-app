import styles from './ClientCard.module.css';

const ClientCard = ({ text, img, name, address }) => {
	return (
		<div className={styles.card}>
			<p className={styles.card__text}>{text}</p>
			<div className={styles.card__profile}>
				<img src={img} alt='profile' className={styles.card__img} />
				<div className={styles.card__info}>
					<h4 className={styles.card__infoName}>{name}</h4>
					<p className={styles.card__infoPlace}>{address}</p>
				</div>
			</div>
		</div>
	);
};

export default ClientCard;
