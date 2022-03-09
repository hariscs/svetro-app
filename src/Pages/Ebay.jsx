import { Header } from '../container';
import { images } from '../constants';

const ebay = {
	title: 'Selling on eBay',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat impedit exercitationem doloribus, libero voluptate. Quae maxime perferendis earum iure.',
	btntext: 'Get a free Consultation',
	img: images.ebayimg,
};

const Ebay = () => {
	return (
		<>
			<Header
				title={ebay.title}
				subtitle={ebay.subtitle}
				btnText={ebay.btntext}
				img={ebay.img}
			/>
		</>
	);
};

export default Ebay;
