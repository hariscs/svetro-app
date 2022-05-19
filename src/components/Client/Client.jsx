import styles from './Client.module.css';
import { ClientCard } from '../../container';
import { images } from '../../constants';

const clientData = [
	{
		id: 1,
		text: "Going into business with Svetro was the best decision I ever made. I'm glad to have come in contact with Svetro, and I would highly recommended.",
		img: images.g1,
		name: 'Catherine Buschamp',
		address: 'London, UK',
	},
	{
		id: 2,
		text: 'The best customer support ever, highly cooperative team of digital marketing I am completely satisfied.',
		img: images.b2,
		name: 'Shaun Duffey',
		address: 'Washington, US',
	},
	{
		id: 3,
		text: 'I am working with svetro from more than 1 year now and I have left my 9-5 job because of the earning I do from my Amazon Store. Thank you Svetro and the best team, guys always keep it up.',
		img: images.b1,
		name: 'Jason Lee',
		address: 'Toronto, Canada',
	},
	{
		id: 4,
		text: 'Hi, I am 23 old and reached out to Svetro through their Facebook 2 years ago and now I have 2 accounts on Amazon and 1 on Walmart running successfully. I am just planning to go to Ebay now.',
		img: images.g2,
		name: 'Rebecca Maslow',
		address: 'London, UK',
	},
	{
		id: 5,
		text: 'Its been a wonderful journey doing business with Svetro, very professional and talented team. The best part of working with them is that they always have a plan for you to make your profit margins sky rocketing.',
		img: images.b1,
		name: 'Brad Traversy',
		address: 'NewYork, US',
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
							Reviews matters for Us. As we are keen on satisfying our customers
							expectations as much as possible and your feedback helps us do
							that.
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
