import { ServiceCard } from '../../components';
import styles from './ServiceSection.module.css';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const serviceData = [
	{
		id: 1,
		icon: images.amazon,
		title: 'Amazon Private Label',
		subtitle:
			'Build your own brand on Amazon with our advanced and top of the notch techniques.',
		link: '/amazon',
	},
	{
		id: 2,
		icon: images.fba,
		title: 'Amazon FBA Wholesale',
		subtitle:
			'We will lead you to build a firm Amazon Private label account and cater to your needs as your business grows.',
		link: '/amazon',
	},
	{
		id: 3,
		icon: images.wallmart,
		title: 'Walmart Private Label',
		subtitle:
			'Building successful Store on Walmart with highest profit margins in the market.',
		link: '/walmart',
	},
	{
		id: 4,
		icon: images.ebay,
		title: 'Selling on eBay',
		subtitle:
			'Become a successful seller on Ebay with our optimized ranking strategies.',
		link: '/ebay',
	},
	{
		id: 5,
		icon: images.dm,
		title: 'Company Formation ',
		subtitle:
			'Form a company with Us with the most reliable and acknowledge track record of authentic in time delivery.',
		link: '/other',
	},
	{
		id: 6,
		icon: images.web,
		title: 'Website development',
		subtitle:
			'Develop websites with today’s advance technologies of coding and programming languages, our team offers',
		link: '/other',
	},
];

const ServiceSection = () => {
	return (
		<section className={styles.serviceSection}>
			<div className='container'>
				<div className={styles.serviceSection__flex}>
					<div className={styles.serviceSection__info}>
						<h2 className={styles.serviceSection__title}>
							We have pioneer Business options for your investments.
						</h2>
						<p className={styles.serviceSection__subtitle}>
							We comb through the market to find the perfect place for your
							business to thrive. We are eternally dedicated to helping your
							business explore unique and highly profitable markets around the
							globe.
						</p>
					</div>
					<div className={styles.serviceSection__cards}>
						{serviceData.map((service, i) => {
							const { id, title, subtitle, icon, link } = service;
							return (
								<motion.div
									key={i}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									transition={{ duration: 0.3, delay: i * 0.3 }}
									variants={{
										visible: { opacity: 1, translateX: 0, translateY: 0 },
										hidden: { opacity: 0, translateX: -50, translateY: -50 },
									}}
								>
									<ServiceCard
										key={id}
										title={title}
										subtitle={subtitle}
										icon={icon}
										link={link}
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
