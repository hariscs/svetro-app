import { ServiceCard } from '../../components';

import styles from './ServiceSection.module.css';

const ServiceSection = () => {
	return (
		<section className={styles.serviceSection}>
			<div className='container'>
				<div className={styles.serviceSection__info}>
					<h2 className={styles.serviceSection__title}>
						Cutting-edge solutions for your digital market
					</h2>
					<p className={styles.serviceSection__subtitle}>
						We comb through the market to find the perfect place for your
						business to thrive. We are eternally dedicated to helping your
						business explore unique and highly profitable markets around the
						globe.
					</p>
				</div>
				<div className='serviceSection__cards'>
					<ServiceCard />
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
