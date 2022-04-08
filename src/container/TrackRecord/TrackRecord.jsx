import styles from './TrackRecord.module.css';
import Card from '../Card/Card';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const card = [
	{
		id: 1,
		title: 'Excellent project delivery',
		subtitle:
			'Till now we have delivered numerous successful projects around the globe to our valuable customers with Zero negative feedback.',
		icon: images.globe,
		bgClr: '#a5c2f5',
	},
	{
		id: 2,
		title: 'Customer Support',
		subtitle: 'We provide 24/7 customer support with reply time of 1 hour.',
		icon: images.customer,
		bgClr: '#FEF1E2',
	},
	{
		id: 3,
		title: 'Customer Satifaction',
		subtitle:
			'We have a velocity of 60% repeat customers, At svetro customer satisfaction is a priority.',
		icon: images.handshake,
		bgClr: '#D3F7E0',
	},
	{
		id: 4,
		title: 'Experienced experts',
		subtitle:
			'We have teams of an average 1.5 years of experience at market places like Amazon, Walmart and Ebay.',
		icon: images.expert,
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
						We have maintained a Perfect track record.
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
