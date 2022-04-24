import React from 'react';
import { Client } from '../components';
import {
	Consult,
	Header,
	LatestBlogs,
	ServiceSection,
	Stats,
	TrackRecord,
} from '../container';
import Faq from '../container/Faq/Faq';
import { images } from '../constants';
import { motion } from 'framer-motion';
const home = {
	title: 'Want to Sell More!',
	subtitle:
		'With Svetro take your online business to the Next level, By having a competitive edge with the most skilled and capable teams by your side of Amazon and E-commerce experts of every platform. The business is just like a game, one should be a player to play it smart and there is never a Game over.',
	btntext: 'Get a free Consultation',
	img: images.heroImg,
};

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={home.title}
				subtitle={home.subtitle}
				btnText={home.btntext}
				img={home.img}
			/>
			<TrackRecord />
			<ServiceSection />
			<Stats />
			<Client />
			<Consult />
			<Faq />
			<LatestBlogs />
		</motion.section>
	);
};

export default Home;
