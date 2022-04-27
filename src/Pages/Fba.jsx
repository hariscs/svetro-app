import { Header, ServiceHeader, Faq, Consult } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';
import { motion } from 'framer-motion';

const fba = {
	title: 'Website development',
	subtitle:
		'he web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks. In a broader sense, web development encompasses all the actions, updates, and operations required to build, maintain and manage a website to ensure its performance, user experience, and speed are optimal. Our developers team at Svetro always keep up with the adaption of new technologies and programming languages/libraries coming in, to deliver the best optimized experience to our clients.',
	btntext: 'Get a free Consultation',
	img: images.webdev,
};

// const headerData = {
// 	title: 'Our Amazon FBA Wholesale package comes with a lot of features',
// 	subtitle:
// 		'Lorem ipsum a lot of text and there is so much that we have to do to get this to look the way we want it to. This is placeholder text describing this visitor to this site.',
// };

const serviceData = [
	{
		title: 'Custom Website Development',
		subtitle:
			'Do you know that from startups to well-established businesses, entrepreneurs are opting for custom web development to introduce their brands in the market the way they want? Even those who already have a business website are now looking forward to customizing it as per users’ requirements. It mainly focuses on your target audience to keep your business ahead of your adversaries. Customizing your website simply means making a website with optimized code, advanced and updated tools, and technologies along with new trends in website development. We will develop your custom websites front-end on JavaScript by using its advance libraries and back-end with node.js and express.js',
		img: images.mern,
	},

	{
		title: 'WordPress Development',
		subtitle:
			'According to W3Techs, WordPress powers over 37.8% of all websites on the internet. WordPress is an excellent website platform for a variety of websites. From blogging to e-commerce to business and portfolio websites, WordPress is a versatile CMS. Designed with usability and flexibility in mind, WordPress is a great solution for both large and small websites. Svetro got creative with it, we build your WordPress websites with adding our own coded elements needed to make it the best. Our repeat customer rate for WordPress development is 70% which proves our position in the market for WordPress development.',
		img: images.wordpress,
		order: true,
	},
];

const Fba = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={fba.title}
				subtitle={fba.subtitle}
				btnText={fba.btntext}
				img={fba.img}
			/>
			{/* <ServiceHeader title={headerData.title} subtitle={headerData.subtitle} /> */}
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

export default Fba;
