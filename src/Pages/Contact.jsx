import { images } from '../constants';
import { Form, Header } from '../container';

const contact = {
	title: 'Contact Us',
	subtitle:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam enim sit quasi voluptatem. Quia tempore, iste eius vel laudantium atque corporis omnis quidem unde est.',
	btntext: 'Book a Meeting',
	img: images.contactimg,
};

const Contact = () => {
	return (
		<section>
			<Header
				title={contact.title}
				subtitle={contact.subtitle}
				btnText={contact.btntext}
				img={contact.img}
			/>

			<Form />
		</section>
	);
};

export default Contact;
