import { Consult, SingleBlog } from '../container';
import { motion } from 'framer-motion';

const SingleBlogPage = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<SingleBlog />
			<Consult />
		</motion.section>
	);
};

export default SingleBlogPage;
