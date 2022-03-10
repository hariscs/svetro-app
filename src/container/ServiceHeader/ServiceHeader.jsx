import styles from './ServiceHeader.module.css';
const ServiceHeader = ({ title, subtitle }) => {
	return (
		<section className={styles.serviceHeader}>
			<div className='container'>
				<h2 className={styles.serviceHeader__title}>{title}</h2>
				<p className={styles.serviceHeader__subtitle}>{subtitle}</p>
			</div>
		</section>
	);
};

export default ServiceHeader;
