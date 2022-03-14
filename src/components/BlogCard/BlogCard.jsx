import styles from './BlogCard.module.css';

const BlogCard = ({ imgUrl, title, body, url }) => {
	return (
		<a href={url} className={styles.card}>
			<img src={imgUrl} alt='img' className={styles.card__img} />
			<h3 className={styles.card__title}>{title}</h3>
			<p className={styles.card__subtitle}>{body}[...]</p>
			<p className={styles.card__continue}>Continue Reading...</p>
		</a>
	);
};

export default BlogCard;
