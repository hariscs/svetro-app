import styles from './Faq.module.css';
import { FaqAcc } from '../../components';
import { motion } from 'framer-motion';

const Faq = () => {
	return (
		<section className={styles.faq}>
			<div className='container'>
				<motion.div
					className={styles.faq__flex}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -100 },
					}}
				>
					<div className={styles.faq__info}>
						<h2 className={styles.faq__title}>Frequently Asked Questions</h2>
					</div>
					<FaqAcc />
				</motion.div>
			</div>
		</section>
	);
};

export default Faq;
