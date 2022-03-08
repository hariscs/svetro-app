import React from 'react';
import { Client } from '../components';
import {
	Consult,
	Header,
	ServiceSection,
	Stats,
	TrackRecord,
} from '../container';

const Home = () => {
	return (
		<>
			<Header />
			<TrackRecord />
			<ServiceSection />
			<Stats />
			<Client />
			<Consult />
		</>
	);
};

export default Home;
