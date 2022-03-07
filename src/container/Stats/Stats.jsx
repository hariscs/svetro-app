import styles from './Stats.module.css';

const Stats = () => {
	return (
		<section className={styles.statsSection}>
			<div className='container'>
				<div className={styles.stats__flex}>
					<div className={styles.stats__info}>
						<h2 className={styles.stats__title}>
							We are not just talk. We have the stats to prove it.
						</h2>
					</div>
					<div className={styles.stats__cards}>
						<div className={styles.stats__card}>
							<div className={styles.stats__cardIcon}>
								<i class='fas fa-user-friends'></i>
							</div>
							<h3 className={styles.stats__cardTitle}>800+</h3>
							<p className={styles.stats__cardInfo}>Satisfied Clients</p>
						</div>
						<div className={styles.stats__card}>
							<div className={styles.stats__cardIcon}>
								<i class='fas fa-clock'></i>
							</div>
							<h3 className={styles.stats__cardTitle}>1.5+</h3>
							<p className={styles.stats__cardInfo}>Years Working</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
