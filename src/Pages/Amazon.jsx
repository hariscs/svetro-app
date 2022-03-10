import { Consult, Header } from '../container';
import Faq from '../container/Faq/Faq';
import { images } from '../constants';
import { ServiceDetail } from '../components';

const amazon = {
	title: 'Amazon Private Label',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat impedit exercitationem doloribus, libero voluptate. Quae maxime perferendis earum iure.',
	btntext: 'Get a free Consultation',
	img: images.amazonimg,
};

const serviceData = [
	{
		title: 'Account creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
	},

	{
		title: 'Account creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
		class: 'row',
	},
	{
		title: 'Account creation and management',
		subtitle:
			'We will take care of your account opening and also manage the account as your users grow. We will make sure that your account scales with your growing business needs. With us, your account is not in danger.',
		img: images.amazonimg,
		// class: 'row',
	},
];

const Amazon = () => {
	return (
		<>
			<Header
				title={amazon.title}
				subtitle={amazon.subtitle}
				btnText={amazon.btntext}
				img={amazon.img}
			/>

			{serviceData.map((data) => (
				<ServiceDetail
					title={data.title}
					subtitle={data.subtitle}
					img={data.img}
					flr={data.class}
				/>
			))}

			<Faq />
			<Consult />
		</>
	);
};

export default Amazon;
