import { Consult, Header, ServiceHeader, Faq } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';
import { motion } from 'framer-motion';

const walmart = {
	title: 'Walmart Private Label',
	subtitle:
		'Walmart is The biggest marketplace after Amazon in US with market share of 69% which is worth $370+ billion in 2021. Walmart has an incredible potential for private label investments due to low seller competition and higher profit margins upto 40%, We have been exploring Walmart and have experienced its potential with numerous successful launches and have raised up a revenue of $4 million in past 2 years.',
	btntext: 'Get free Consultation',
	img: images.ebayimg,
};

const serviceData = [
	{
		title: 'Svetro’s Walmart Strategy',
		subtitle:
			'The Walmart Marketplace gives you the best leads to generate more revenue if you look for an innovative way to sell your products and services. Our Services offers to design your online business growth on the maximum level. Walmart has established itself as a marketplace for lower prices products with good quality and convenience, In order to win this game all we need to do is provide a competitive price which is only possible with two ways Powerful sourcing and MPL launches (Our unique private label technique).',
		img: images.amazonimg,
	},

	{
		title: 'Svetro’s MPL Strategy',
		subtitle:
			'Multiple Products Launches strategy (BBL) states that we invest the same amount of budget as traditional Private Label launch but for launching 3-5 products instead of 1 single product. As the marketplace is known for low price products, the consumer psychology will not adopt higher prices like Amazon or other marketplaces, So we developed this strategy with its own unique criteria in which we launch numerous but low budget product in order to meet the demand of the market and at the same time we now have our Storefront on platform rich with different products despite just 1 product as we do in our traditional Private Label Brand. We have experienced this strategy through numerous investments and so far our success rate is more than 80% with 150+ launches.',
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Sustainable Compounding Growth',
		subtitle:
			'After Amazon Walmart is the 2nd largest online retail platform but with higher inverse competition from Amazon. Using this competitive edge in regards of low competition we use the formula of 70/30 to grow our client’s Walmart business sustainably. As mentioned we target upto 40% profit margins on single product, we utilize this profit with 30% reinvestment and 70% payout to our client to sustainably make a compounding growth. These Flagship models of Business are mentioned on contract as an option for our client to decide',
		img: images.amazonimg,
	},
];

const headerData = {
	title: 'Our Walmart Private Label package comes with a lot of features',
	subtitle:
		'Lorem ipsum a lot of text and there is so much that we have to do to get this to look the way we want it to. This is placeholder text describing this visitor to this site.',
};

const Walmart = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={walmart.title}
				subtitle={walmart.subtitle}
				btnText={walmart.btntext}
				img={walmart.img}
			/>

			<ServiceHeader title={headerData.title} subtitle={headerData.subtitle} />
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

export default Walmart;
