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

const home = {
	title: 'First-class, cutting-edge solutions for your business',
	subtitle:
		'We discover undiscovered markets and give our clients a competitive edge.',
	btntext: 'Get a free Consultation',
	img: images.heroImg,
};

const Home = () => {
	return (
		<>
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
		</>
	);
};

export default Home;
