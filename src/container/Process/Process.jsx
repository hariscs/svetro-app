import { motion } from 'framer-motion';
import { ProcessCard } from '../../components';
import styles from './Process.module.css';
import { images } from '../../constants';

const processData = [
	{
		id: 1,
		title: 'Consultation',
		subtitle:
			'Let’s get to know each other. Once we find out about your situation, needs and wants, we will give you a proposal outlining what we can do for you and the costs involved in working with us. We will work with you only if we can truly increase your bottom line profits.',
		img: images.consult,
	},
	{
		id: 2,
		title: 'Optimization',
		subtitle:
			'Let’s get to know each other. Once we find out about your situation, needs and wants, we will give you a proposal outlining what we can do for you and the costs involved in working with us. We will work with you only if we can truly increase your bottom line profits.',
		img: images.optimize,
	},
	{
		id: 3,
		title: 'Scaling',
		subtitle:
			'Let’s get to know each other. Once we find out about your situation, needs and wants, we will give you a proposal outlining what we can do for you and the costs involved in working with us. We will work with you only if we can truly increase your bottom line profits.',
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
