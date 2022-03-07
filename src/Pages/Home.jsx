import React from 'react';
import { Client } from '../components';
import { Header, ServiceCards, Stats, TrackRecord } from '../container';

const Home = () => {
	return (
		<>
			<Header />
			<TrackRecord />
			<Stats />
			<ServiceCards />
			<Client />
		</>
	);
};

export default Home;
