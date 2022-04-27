import { Consult, Header, Faq } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';
import { motion } from 'framer-motion';

const ebay = {
	title: 'Selling on eBay',
	subtitle:
		'eBay is a world leader in commerce through its marketplace platforms that connect millions of buyers and sellers in more than 190 markets around the world making 2 billions transaction per Day.Taking advantage of its huge scale Svetro has been redirecting its clients to ebay marketplace for more exploration and diversification. We have launched 200+ stores of our clients with a success rate of above 90% over the past 2 years. So wouldn’t you want ebay experts to be on your side to make you a top rated seller?',
	btntext: 'Get free Consultation',
	img: images.ebayimg,
};

const serviceData = [
	{
		title: 'How we do it perfectly',
		subtitle:
			"To increase eBay sales Understanding what pushes some stores to the top is the key. Much of it has to do with the way eBay’s search engine works, eBay’s search engine helps customers find the items relevant to their search. The exact formula is kept secret, just like Google's search algorithm, to prevent tampering. However, By launching numerous stores we cracked the key formulas that works over the past 2 years which are proved to enhance ratings and drive more conversions.",
		img: images.perfect,
	},

	{
		title: 'Perfect steps leads to sustaniable success',
		subtitle:
			'Like other e-commerce platforms Amazon and Walmart, ebay has the same process and framework for sellers but with a different customer and market psychology. We believe right strategy and complete implementation can almost abolish 100% chances of failure, with that mindset our R&D has designed a criteria of 12 components to validate our plans for launching on ebay and 15 components strategy to implement during selling on ebay. Such accurate and sequential approach is the key for our higher success rate.',
		img: images.leadsuccess,
		order: true,
	},
	{
		title: 'Maintenance is important than Rocketing Growth',
		subtitle:
			'Ebay seller business is comparatively very congested than Amazon or Walmart. Because of huge consumer demand on platform ranking and growth is very easy with right strategy but the sustainability is a huge challenge because of its diverse and congested nature having almost daily launches on storefront and its management. If not maintained and updated well, the store gets de-ranked with the same speed it was ranked. However, being an experience and successful service providers Svetro team has zero negative feedback in such regards. Our clients success is our success and client’s satisfaction is the first priority.',
		img: images.maintine,
	},
];

const Ebay = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={ebay.title}
				subtitle={ebay.subtitle}
				btnText={ebay.btntext}
				img={ebay.img}
			/>

			{serviceData.map((data, i) => (
				<ServiceDetail
					key={i}
					title={data.title}
					subtitle={data.subtitle}
					img={data.img}
					order={data.order}
				/>
			))}

			<Faq />
			<Consult />
		</motion.section>
	);
};

export default Ebay;
