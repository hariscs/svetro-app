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
							We are not just talk. We have the stats to prove it.
						</h2>
					</div>
					<div className={styles.stats__cards}>
						<div className={styles.stats__card}>
							<div className={styles.stats__cardIcon}></div>
							<h3 className={styles.stats__cardTitle}>800+</h3>
							<p className={styles.stats__cardInfo}>Satisfied Clients</p>
						</div>
						<div className={styles.stats__card}>
							<div className={styles.stats__cardIcon}></div>
							<h3 className={styles.stats__cardTitle}>1.5+</h3>
							<p className={styles.stats__cardInfo}>Years Working</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Stats;
