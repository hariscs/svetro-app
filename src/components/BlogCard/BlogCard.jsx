import { images } from '../../constants';
import styles from './BlogCard.module.css';

const BlogCard = ({ img, time, title, subtitle }) => {
	return (
		<a href='/blog-link' className={styles.card}>
			<img src={images.heroImg} alt='img' className={styles.card__img} />
			<h3 className={styles.card__title}>
				See The Light: What’s in The Amazon Lightning Deals
			</h3>
			<p className={styles.card__subtitle}>
				Blog subtitle here Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Corporis consectetur placeat cumque consequatur aliquam nemo illo
				accusamus modi possimus soluta!
			</p>
			<p className={styles.card__continue}>Continue Reading...</p>
		</a>
	);
};

export default BlogCard;
