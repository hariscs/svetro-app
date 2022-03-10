import { Header, ServiceHeader, Faq, Consult } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';

const fba = {
	title: 'Amazon FBA Wholesale',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat impedit exercitationem doloribus, libero voluptate. Quae maxime perferendis earum iure.',
	btntext: 'Get a free Consultation',
	img: images.fbaimg,
};

const headerData = {
	title: 'Our Amazon FBA Wholesale package comes with a lot of features',
	subtitle:
		'Lorem ipsum a lot of text and there is so much that we have to do to get this to look the way we want it to. This is placeholder text describing this visitor to this site.',
};

const serviceData = [
	{
		title: 'eBay creation and management',
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

const Fba = () => {
	return (
		<>
			<Header
				title={fba.title}
				subtitle={fba.subtitle}
				btnText={fba.btntext}
				img={fba.img}
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

export default Fba;
