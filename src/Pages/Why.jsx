import { Process, Header, Faq, Consult, LatestBlogs } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';

const home = {
	title: 'Why Svetro?',
	subtitle:
		'Our portfolio consists of clients at different stages of the business cycle: launch, growth, shakeout, maturity & decline. Our services add value to your business no matter what phase you are at in the business cycle.',
	img: images.meeting,
	btntext: 'Get Free Consultation',
};

const serviceData = [
	{
		title: 'Effecient Amazon product management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
	},

	{
		title: 'Effecient eBay product management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Effecient Walmart product management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
	},
	{
		title: '24/7 customer support',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
		order: true,
	},
];

const Why = () => {
	return (
		<>
			<Header
				title={home.title}
				subtitle={home.subtitle}
				btnText={home.btntext}
				img={home.img}
			/>
			<Process />
			{serviceData.map((data) => (
				<ServiceDetail
					title={data.title}
					subtitle={data.subtitle}
					img={data.img}
					order={data.order}
				/>
			))}
			<Faq />
			<Consult />
			<LatestBlogs />
		</>
	);
};

export default Why;
