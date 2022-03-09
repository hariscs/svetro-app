import { Header } from '../container';

import { images } from '../constants';

const walmart = {
	title: 'Walmart Private Label',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat impedit exercitationem doloribus, libero voluptate. Quae maxime perferendis earum iure.',
	btntext: 'Get a free Consultation',
	img: images.walmartimg,
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
		</>
	);
};

export default Walmart;
