import { BlogCard } from '../../components';
import styles from './Blog.module.css';

const Blog = () => {
	return (
		<section className={styles.blogs}>
			<h1>Blog</h1>
			<BlogCard />
		</section>
	);
};

export default Blog;
