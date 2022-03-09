import React from 'react';
import { Client } from '../components';
import {
	Consult,
	Header,
	ServiceSection,
	Stats,
	TrackRecord,
} from '../container';
import Faq from '../container/Faq/Faq';

const Home = () => {
	return (
		<>
			<Header />
			<TrackRecord />
			<ServiceSection />
			<Stats />
			<Client />
			<Consult />
			<Faq />
		</>
	);
};

export default Home;
