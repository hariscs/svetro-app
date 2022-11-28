import styles from './Stats.module.css';
import { motion } from 'framer-motion';

const Stats = () => {
	return (
		<section className={styles.statsSection}>
			<div className='container'>
				<motion.div
					className={styles.stats__flex}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -100 },
					}}
				>
					<div className={styles.stats__info}>
						<h2 className={styles.stats__title}>
							"We aren't just chatting here. Statistics support our claims".
						</h2>
					</div>
					<div className={styles.stats__cards}>
						<div className={styles.stats__card}>
							<h3 className={styles.stats__cardTitle}>150+</h3>
							<p className={styles.stats__cardInfo}>Satisfied Clients</p>
						</div>
						<div className={styles.stats__card}>
							<h3 className={styles.stats__cardTitle}>'$2 Million+'</h3>
							<p className={styles.stats__cardInfo}>Annual Revenue</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Stats;
