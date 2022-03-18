import { Button } from '../../components';
import styles from './Consult.module.css';
import { motion } from 'framer-motion';

const Consult = () => {
	return (
		<section className={styles.consultSection}>
			<div className='container'>
				<div className={styles.card__container}>
					<motion.div
						className={styles.card}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: false }}
						transition={{ duration: 1 }}
						variants={{
							visible: { opacity: 1, translateY: 0 },
							hidden: { opacity: 0, translateY: -100 },
						}}
					>
						<h2 className={styles.card__text}>
							Allow us to do the heavy-lifting.
						</h2>
						<p className={styles.card__subText}>
							Utilize our tried and tested approach to set up your digital
							product and boost your profits
						</p>

						<Button btnType={'btn__outline'}>Contact Us</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Consult;
