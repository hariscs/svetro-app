import { motion } from 'framer-motion';
import { Form, LatestBlogs } from '../container';

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Form />
			<LatestBlogs />
		</motion.section>
	);
};

export default Contact;
