import { Consult, Header, ServiceHeader, Faq } from '../container';
import { images } from '../constants';
import { ServiceCard, ServiceDetail } from '../components';
import { motion } from 'framer-motion';

const amazon = {
	title: 'Amazon Private Label',
	subtitle:
		"Private labels Brand building, the advent of e-commerce giants like Amazon, are a new way for businesses to generate money. All it takes are Expertise to invest on right product on right Time. In an overly crowded and competitive sector, we help businesses create loyalty and trust. In less than 5 years, we've grown our businesses to over $10 million in yearly sales of our Amazon private label Brands, thanks to our thought-provoking strategies and innovative teams at Svetro.",
	btntext: 'Get a free Consultation',
	img: images.amazonimg,
};
const serviceData = [
	{
		title: 'Svtero Blitz Ranking (SBR)',
		subtitle:
			'As of current statistics around 75.1 million products have been sold on Amazon in previous year. The question in your mind may arise if I am coming with new product at such a marketplace how am I gonna rank and compete in such huge market ? We have the answer, Svetro Blitz Ranking (SBR) strategy which is applied by our expert team and consistently developed from the past 3 years and have an incredible results  for our clients resulting a perfect record of 99.9% accuracy.',
		img: images.amazonimg,
	},

	{
		title: 'Fast ROI Achievement',
		subtitle:
			"The main goal of every investment has been to achieve fast Return on Investment. The faster the ROI the higher is the probability of a success in a business. At Svtero we have generated a revenue of $1.5 million in previous year for our current clients. For customers of all sizes, from solo-preneur to partnerships to startups to small companies to enterprises, we've taken all the things we've learned, the mistakes we've made, and cut the fat to produce this powerful platform for marketing and brand creation. To keep expenses down and guarantee outcomes, we stick to proven and tested procedures.",
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Out of the Box Sourcing',
		subtitle:
			'The backbone of global business is strong sourcing which enhance your net profit margins in a product. Svetro has cracked that formula for you, we have a specialized team of global sourcing around the world and contacts with verified traders and manufacturers in China, Pakistan and South, East Asia to get reasonable prices for our client’s products and bring them appealing profit margins.',
		img: images.amazonimg,
	},
	{
		title: 'Hunting',
		subtitle:
			'A full-fledge research and analysis for set time frame of a product category to get a perfect product to launch.',
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Brand approval ',
		subtitle:
			'The most critical part of FBA wholesale. Our team has immense track record for profitable brand approvals.',
		img: images.amazonimg,
	},
	{
		title: 'Me too Listings',
		subtitle:
			'After authorization from a concern Brand, we me too the Perfect listings to be a reseller of an optimized store.',
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Maintaining Buy Box ',
		subtitle:
			'Our Buy Box on average is 25%. Our R&D has been developing and exploring techniques to have and maintain Buy Box as much as possible.',
		img: images.amazonimg,
	},
	{
		title: 'Wholesale The Svetro way',
		subtitle:
			'We as an E-commerce company have a different unique approach of doing FBA wholesale than other typical service providers. Our R&D team has been exploring and generating new ways to execute incredible strategies regarding Product Research, Brand Research and Brand approval in the most efficient form it possibly can be. The continuous development in strategies and innovation made us enable to maintain our profit margins we have been delivering to our clients over the years.',
		img: images.amazonimg,
		order: true,
	},
];
const headerData = {
	title: 'Our Amazon Private Label package comes with a lot of features',
	subtitle:
		'Lorem ipsum a lot of text and there is so much that we have to do to get this to look the way we want it to. This is placeholder text describing this visitor to this site.',
};

const amazonService = [
	{
		title: 'title',
		subtitle: 'subtitle',
		icon: 'ic',
	},
];

const Amazon = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={amazon.title}
				subtitle={amazon.subtitle}
				btnText={amazon.btntext}
				img={amazon.img}
			/>
			<ServiceHeader title={headerData.title} subtitle={headerData.subtitle} />
			<div className='container'>
				{amazonService.map((data, i) => (
					<ServiceCard
						key={i}
						title={data.title}
						subtitle={data.subtitle}
						link='/contact'
					/>
				))}
			</div>

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

export default Amazon;
