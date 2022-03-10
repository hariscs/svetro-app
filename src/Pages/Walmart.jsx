import { Consult, Header, ServiceHeader, Faq } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';

const walmart = {
	title: 'Walmart Private Label',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat impedit exercitationem doloribus, libero voluptate. Quae maxime perferendis earum iure.',
	btntext: 'Get a free Consultation',
	img: images.ebayimg,
};

const serviceData = [
	{
		title: 'Walmart creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
	},

	{
		title: 'Account creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
		order: true,
	},
	{
		title: 'Account creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
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
		<>
			<Header
				title={walmart.title}
				subtitle={walmart.subtitle}
				btnText={walmart.btntext}
				img={walmart.img}
			/>

			<ServiceHeader title={headerData.title} subtitle={headerData.subtitle} />
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
		</>
	);
};

export default Walmart;
