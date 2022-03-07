import styles from './Client.module.css';
import { ClientCard } from '../../container';

const clientData = [
	{
		id: 1,
		text: "Going into business with Svetro was the best decision I ever made. I'm glad to have come in contact with Svetro, and I would highly recommended.",
		// img: g2,
		name: 'Catherine Buschamp',
		address: 'Toronto, Canada',
	},
	{
		id: 2,
		text: "Going into business with Svetro was the best decision I ever made. I'm glad to have come in contact with Svetro, and I would highly recommended.",
		// img: g1,
		name: 'Shaun Duffey',
		address: 'Toronto, Canada',
	},
	{
		id: 3,
		text: "Going into business with Svetro was the best decision I ever made. I'm glad to have come in contact with Svetro, and I would highly recommended.",
		// img: b1,
		name: 'Jason Lee',
		address: 'Toronto, Canada',
	},
	{
		id: 4,
		text: "Going into business with Svetro was the best decision I ever made. I'm glad to have come in contact with Svetro, and I would highly recommended.",
		// img: b2,
		name: 'Rebecca Maslow',
		address: 'Toronto, Canada',
	},
	{
		id: 5,
		text: "Going into business with Svetro was the best decision I ever made. I'm glad to have come in contact with Svetro, and I would highly recommended.",
		// img: b2,
		name: 'Rebecca Maslow',
		address: 'Toronto, Canada',
	},
];

const Clients = () => {
	return (
		<section className={styles.clientsSection}>
			<div className='container'>
				<div className={styles.clients__flex}>
					<div className={styles.clientsInfo}>
						<h1 className={styles.clients__title}>What our clients say</h1>
						<p className={styles.clients__subtitle}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
							dignissim id eu magna eu.
						</p>
					</div>
				</div>
			</div>
			<div className='slider'>
				<div className='innerSlider'>
					{clientData.map((data) => {
						const { id, name, text, img, address } = data;
						return (
							<ClientCard
								key={id}
								name={name}
								text={text}
								img={img}
								address={address}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Clients;
