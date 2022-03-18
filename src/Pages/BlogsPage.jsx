import { Blogs } from '../container';
import { motion } from 'framer-motion';

const BlogsPage = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Blogs />
		</motion.section>
	);
};

export default BlogsPage;
