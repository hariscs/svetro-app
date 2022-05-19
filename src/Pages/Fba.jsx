import { Header, Faq, Consult, ServiceHeader } from '../container';
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

const company = [
	{
		title: 'LLC Formation',
		subtitle:
			'Forming LLC in US for E-commerce purposes is the mandatory and most initial step to take. There are various service providers in the market and guarantees an authentic and in time formation of Your LLC formation, but despite such a huge body of LLC service providers, complaints are very frequent from the clients about documents authencity and in time fulfillment. Svetro has been established its name in the market for its commitment and authenticity over the past 3 Years of company formation services. Our sources are strong and we never stop developing them to be more powerful for us. ',
		img: images.llc,
		order: true,
	},
	{
		title: 'LTD Formation',
		subtitle:
			'Forming LTD in UK for E-commerce Business is the mandatory and most initial step to take. UK marketplace is recommended for Private Label launches because of its low competition and decent revenues, There are various service providers in the market and guarantees an authentic and in time formation of Your Ltd formation, but despite such a huge body of service providers, complaints are very frequent from the clients about documents authenticity and lack of commitment. Svetro has established its name in the market for its commitment and authenticity over the past 3 Years of Ltd company formation services. Our sources are strong and we never stop developing them more to be more highly reliable for our clients. ',
		img: images.ltd,
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

			{serviceData.map((data, i) => (
				<ServiceDetail
					key={i}
					title={data.title}
					subtitle={data.subtitle}
					img={data.img}
					order={data.order}
				/>
			))}

			<ServiceHeader
				title='Company Formation'
				subtitle='The process of incorporating (registering) a firm as a limited company is known as company formation. When a business is registered, it becomes a separate legal entity, a person that is accountable for its own money, assets, and responsibilities. To operate an online (E-commerce) business in any country around the world, one should have a registered company according to that country’s policies and legal requirements. Svetro has been providing LLC and LTD formation services around the globe for competitive prices and the most reliable and Trustworthy sources.'
			/>

			{company.map((data, i) => (
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
