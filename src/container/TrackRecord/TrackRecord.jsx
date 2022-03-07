import styles from './TrackRecord.module.css';
import Card from '../Card/Card';
import { motion } from 'framer-motion';

const card = [
	{
		id: 1,
		title: 'Excellent project delivery',
		subtitle:
			'We have delivered numerous successful projects around the globe to our clients',
		icon: '/assets/icons/globe.svg',
		bgClr: '#a5c2f5',
	},
	{
		id: 2,
		title: 'Customer care card',
		subtitle:
			'We have delivered numerous successful projects around the globe to our clients',
		icon: '/assets/icons/customer-care.svg',
		bgClr: '#FEF1E2',
	},
	{
		id: 3,
		title: 'Customer Satifaction',
		subtitle:
			'We have delivered numerous successful projects around the globe to our clients',
		icon: '/assets/icons/handshake.svg',
		bgClr: '#D3F7E0',
	},
	{
		id: 4,
		title: 'Experienced experts',
		subtitle:
			'We have delivered numerous successful projects around the globe to our clients',
		icon: '/assets/icons/expert-analysis.svg',
		bgClr: '#A5C2F5',
	},
];

const TrackRecord = () => {
	return (
		<section className={styles.trackSection}>
			<div className='container'>
				<motion.div
					className={styles.trackSection__info}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					variants={{
						visible: { opacity: 1, translateY: 0 },
						hidden: { opacity: 0, translateY: -50 },
					}}
				>
					<h2 className={styles.trackSection__title}>
						We have the track-record
					</h2>
					<p className={styles.trackSection__subtitle}>
						Finding the right people to cater to the growing needs of your
						business can be difficult. However, with us you dont have to worry
						about all that.
					</p>
				</motion.div>
				<div className={styles.trackSection__cards}>
					{card.map((data, i) => {
						const { id, title, subtitle, icon, bgClr } = data;
						return (
							<motion.div
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: i * 0.3 }}
								variants={{
									visible: { opacity: 1, translateX: 0, translateY: 0 },
									hidden: { opacity: 0, translateX: -50, translateY: -50 },
								}}
							>
								<Card
									key={id}
									title={title}
									subtitle={subtitle}
									icon={icon}
									bgClr={bgClr}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TrackRecord;
