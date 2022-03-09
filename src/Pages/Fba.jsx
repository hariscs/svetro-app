import { Header } from '../container';

import { images } from '../constants';

const fba = {
	title: 'Amazon FBA Wholesale',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat impedit exercitationem doloribus, libero voluptate. Quae maxime perferendis earum iure.',
	btntext: 'Get a free Consultation',
	img: images.fbaimg,
};

const Fba = () => {
	return (
		<>
			<Header
				title={fba.title}
				subtitle={fba.subtitle}
				btnText={fba.btntext}
				img={fba.img}
			/>
		</>
	);
};

export default Fba;
