import React from 'react';
import { Client } from '../components';
import { Header, ServiceSection, Stats, TrackRecord } from '../container';

const Home = () => {
	return (
		<>
			<Header />
			<TrackRecord />
			<ServiceSection />
			<Stats />
			<Client />
		</>
	);
};

export default Home;
