import { motion } from 'framer-motion';
import { ProcessCard } from '../../components';
import styles from './Process.module.css';
import { images } from '../../constants';

const processData = [
	{
		id: 1,
		title: 'Consultation',
		subtitle:
			'We would be delighted to get in touch with you. We believe developing relations develop results, So we have provided ambassadors of Svetro from every service domain we offer, in order to Assist you against your concerns and make sure to satisfy our all your consultation needs. We provide 24/7 working days consultation free of cost.',
		img: images.consult,
	},
	{
		id: 2,
		title: 'Optimization',
		subtitle:
			'Creating a business have become very handy now  a days because of advance medium of technology and connectivity, the issue we as a business owners face is huge a competition in every market. Optimization is the key which our team has kept a perfect track record in, for all the business models we work on, for organic productivity.',
		img: images.optimize,
	},
	{
		id: 3,
		title: 'Scaling',
		subtitle:
			'Scaling growth entails developing business models and constructing your business in such a manner that it can easily scale in order to create constant revenue growth and prevent stalls without incurring a lot of additional costs and/or resources. Most of our clients are the referred clients from previous ones.',
		img: images.scale,
	},
];

const Process = () => {
	return (
		<section className={styles.processSection}>
			<div className='container'>
				<div>
					<h2 className={styles.processSection__title}>
						Our process is <span>simple</span> and <span>easy</span>
					</h2>
				</div>

				<div className={styles.processSection__cards}>
					{processData.map((data, i) => {
						const { id, title, subtitle, img } = data;
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
								<ProcessCard
									key={id}
									title={title}
									subtitle={subtitle}
									img={img}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Process;
