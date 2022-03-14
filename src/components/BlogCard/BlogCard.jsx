import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';

const BlogCard = ({ imgUrl, title, body, url }) => {
	return (
		<article className={styles.card}>
			<Link to={'/blog/' + url}>
				<img src={imgUrl} alt='img' className={styles.card__img} />
				<h3 className={styles.card__title}>{title}</h3>
				<p className={styles.card__subtitle}>{body}[...]</p>
				<p className={styles.card__continue}>Continue Reading...</p>
			</Link>
		</article>
	);
};

export default BlogCard;
