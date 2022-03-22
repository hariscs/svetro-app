import styles from './ServiceDetail.module.css';
import Button from '../Button/Button';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox';

const ServiceDetail = ({ title, subtitle, img, order, serviceOffer }) => {
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
						<div className={styles.service__list}>
							<div className={styles.service__checkbox}>
								<div className={styles.icon__container}>
									{/* <IconContext.Provider
										value={{ color: '#72b39c', className: 'icon' }}
									>
										<BsFillCheckCircleFill />
									</IconContext.Provider>
									<span>Account Opening</span> */}
									<ServiceCheckbox serviceOffer={serviceOffer} />
								</div>
							</div>
							<div className={styles.service__checkbox}>
								<div className={styles.icon__container}>
									<IconContext.Provider
										value={{ color: '#72b39c', className: 'icon' }}
									>
										<BsFillCheckCircleFill />
									</IconContext.Provider>
									<span>Account Managment</span>
								</div>
							</div>
						</div>

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
