import { ServiceCard } from '../../components';
import styles from './ServiceSection.module.css';
import { images } from '../../constants';

const serviceData = [
	{
		id: 1,
		icon: images.amazon,
		title: 'Amazon Private Label',
		subtitle:
			'We will lead you to build a firm Amazon Private label account and cater to your needs as your business grows.',
		link: '/amazon',
	},
	{
		id: 2,
		icon: images.fba,
		title: 'Amazon FBA Wholesale',
		subtitle:
			'We will lead you to build a firm Amazon Private label account and cater to your needs as your business grows.',
		link: '/fba',
	},
	{
		id: 3,
		icon: images.wallmart,
		title: 'Walmart Private Label',
		subtitle:
			'We will lead you to build a firm Amazon Private label account and cater to your needs as your business grows.',
		link: '/walmart',
	},
	{
		id: 4,
		icon: images.ebay,
		title: 'Selling on eBay',
		subtitle:
			'We will lead you to build a firm Amazon Private label account and cater to your needs as your business grows.',
		link: '/ebay',
	},
];

const ServiceSection = () => {
	return (
		<section className={styles.serviceSection}>
			<div className='container'>
				<div className={styles.serviceSection__flex}>
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
					<div className={styles.serviceSection__cards}>
						{serviceData.map((service) => {
							const { id, title, subtitle, icon, link } = service;
							return (
								<ServiceCard
									key={id}
									title={title}
									subtitle={subtitle}
									icon={icon}
									link={link}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
