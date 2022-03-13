import styles from './BlogCard.module.css';

const BlogCard = () => {
	return (
		<a href='/link' className={styles.card}>
			<img src='' alt='img' className={styles.card__img} />
			<span className={styles.card__time}>Time here</span>
			<h3 className={styles.card__title}>Blog title here</h3>
			<p className={styles.card__subtitle}>Blog subtitle here</p>
		</a>
	);
};

export default BlogCard;
