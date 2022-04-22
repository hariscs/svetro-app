import styles from './ServiceDetail.module.css';
import Button from '../Button/Button';

const ServiceDetail = ({ title, subtitle, img, order }) => {
	return (
		<section className={styles.service}>
			<div className='container'>
				<div className={` ${styles.service__flex}`}>
					<div
						className={
							order
								? `${styles.service__info} ${styles.service__order__1}`
								: `${styles.service__info}`
						}
					>
						<h2 className={styles.service__title}>{title}</h2>
						<p className={styles.service__subtitle}>{subtitle}</p>

						<Button btnType={'btn__green'}>Book this Service</Button>
					</div>
					<div className={styles.service__img}>
						<img src={img} alt='amazon' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceDetail;
