import styles from './ServiceHeader.module.css';
import { motion } from 'framer-motion';

const ServiceHeader = ({ title, subtitle }) => {
	return (
		<motion.section
			className={styles.serviceHeader}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: false }}
			transition={{ duration: 1 }}
			variants={{
				visible: { opacity: 1, translateY: 0 },
				hidden: { opacity: 0, translateY: -100 },
			}}
		>
			<div className='container'>
				<h2 className={styles.serviceHeader__title}>{title}</h2>
				<p className={styles.serviceHeader__subtitle}>{subtitle}</p>
			</div>
		</motion.section>
	);
};

export default ServiceHeader;
