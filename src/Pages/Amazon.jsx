import { Consult, Header, ServiceHeader, Faq } from '../container';
import { images } from '../constants';
import { ServiceDetail } from '../components';

{
	var exemples = [
		{
			body: 'body here',
			publishedAt: '2022-03-06T14:33:00.000Z',
			slug: {
				_type: 'slug',
				current: 'why-hiring-an-amazon-account-manager-is-still-worth-it',
			},
			title: '1title',
			_createdAt: '2022-03-13T14:31:11Z',
			_id: '2e98aa3c-2720-409e-80e1-c0a09a588d3b',
			_rev: 'wZQWEb0kNvf2Di5Xs5atfA',
			_type: 'post',
			_updatedAt: '2022-03-13T14:42:27Z',
		},
		{
			body: 'body here',
			publishedAt: '2022-03-06T14:33:00.000Z',
			slug: {
				_type: 'slug',
				current: 'why-hiring-an-amazon-account-manager-is-still-worth-it',
			},
			title: '2title',
			_createdAt: '2022-03-13T14:31:11Z',
			_id: '2e98aa3c-2720-409e-80e1-c0a09a588d3b',
			_rev: 'wZQWEb0kNvf2Di5Xs5atfA',
			_type: 'post',
			_updatedAt: '2021-03-13T14:42:27Z',
		},
		{
			body: 'body here',
			publishedAt: '2021-03-06T14:33:00.000Z',
			slug: {
				_type: 'slug',
				current: 'why-hiring-an-amazon-account-manager-is-still-worth-it',
			},
			title: '3title',
			_createdAt: '2022-03-13T14:31:11Z',
			_id: '2e98aa3c-2720-409e-80e1-c0a09a588d3b',
			_rev: 'wZQWEb0kNvf2Di5Xs5atfA',
			_type: 'post',
			_updatedAt: '2020-03-13T14:42:27Z',
		},
	];

	const list = exemples
		.sort((a, b) => new Date(a._updatedAt) - new Date(b._updatedAt))
		.map((exemple) => exemple.title);
	// console.log(list);
	// exemples.map((exemple) =>
	// 	console.log(exemple.title, new Date(exemple._updatedAt).getDay())
	// );
}

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
	title: 'Our Amazon Private Label package comes with a lot of features',
	subtitle:
		'Lorem ipsum a lot of text and there is so much that we have to do to get this to look the way we want it to. This is placeholder text describing this visitor to this site.',
};

const Amazon = () => {
	return (
		<>
			<Header
				title={amazon.title}
				subtitle={amazon.subtitle}
				btnText={amazon.btntext}
				img={amazon.img}
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
		</>
	);
};

export default Amazon;
