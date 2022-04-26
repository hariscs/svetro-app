import { Process, Header, Faq, Consult, LatestBlogs } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';
import { motion } from 'framer-motion';

const home = {
	title: 'Why Svetro?',
	subtitle:
		'Svetro is an E-commerce company with long experience in creating solutions and providing services to give its customers a competitive edge. We are global providers of various range of first-class services that can uplift your business to the next level including Custom software development, Web designing, Exploration to undiscovered powerful marketplaces of E-commerce like Amazon, Walmart, Ebay and Etsy. The Business world is on digital track now; The Svetro is all about Digital Transformation of Businesses which is proven by our performance in the industry.',
	img: images.meeting,
	btntext: 'Get Free Consultation',
};

const serviceData = [
	{
		title: 'Amazon account handling',
		subtitle:
			"To expand your business, you'll need to keep your Amazon Seller Account in good shape. You don't want to waste time on taxation difficulties that will disrupt the flow of your business, resulting in lost income. Our team at Svetro will take a holistic approach to Amazon support, enhancing the customer service experience, and safeguarding the health of your seller account in every way. Let us make your Amazon journey memorable for you with unique set of techniques and strategies highly compelling for our clients.",
		img: images.amazonimg,
	},

	{
		title: 'Walmart account management',
		subtitle:
			'You can always rely on Svetro’s expert services. Your business is always in good hands when you work with us. We offer a full range of management services for your Walmart store aimed at improving business operations. Our innovative strategies and specialized approach are designed to maximize your potential while taking into consideration the nuances of Walmart. Let us make your Walmart journey memorable for you with unique set of techniques and strategies highly compelling for our clients.',
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Ebay account handling',
		subtitle:
			'eBay connects millions of buyers and sellers around the world. If you want to run a successful eBay business, a long trading history and experience are what matters in this marketplace. Our ebay team has managed to make 100+ stores successful with constant R&D developing new techniques and strategies to make our client’s stores the best sellers. So Let us make your ebay journey memorable for you with unique set of techniques and strategies highly compelling for our clients.',
		img: images.amazonimg,
	},
];

const Why = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={home.title}
				subtitle={home.subtitle}
				btnText={home.btntext}
				img={home.img}
			/>
			<Process />
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
			<LatestBlogs />
		</motion.section>
	);
};

export default Why;
