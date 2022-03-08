import { Button } from '../../components';
import styles from './Consult.module.css';

const Consult = () => {
	return (
		<section className={styles.consultSection}>
			<div className='container'>
				<div className={styles.card__container}>
					<div className={styles.card}>
						<h2 className={styles.card__text}>
							Allow us to do the heavy-lifting.
						</h2>
						<p className={styles.card__subText}>
							Utilize our tried and tested approach to set up your digital
							product and boost your profits
						</p>

						<Button>Contact</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Consult;
