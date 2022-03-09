import styles from './Faq.module.css';
import { FaqAcc } from '../../components';

const Faq = () => {
	return (
		<section className={styles.faq}>
			<div className='container'>
				<div className={styles.faq__info}>
					<h2 className={styles.faq__title}>Frequently Asked Questions</h2>
				</div>
				<FaqAcc />
			</div>
		</section>
	);
};

export default Faq;
