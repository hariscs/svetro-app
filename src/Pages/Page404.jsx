import React from 'react';
import { NotFound } from '../components';
import { motion } from 'framer-motion';

const Page404 = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<NotFound />;
		</motion.section>
	);
};

export default Page404;
