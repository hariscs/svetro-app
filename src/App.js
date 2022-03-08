import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Amazon, Page404, Fba, Walmart, Ebay } from './Pages';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/amazon' element={<Amazon />} />
				<Route path='/fba' element={<Fba />} />
				<Route path='/walmart' element={<Walmart />} />
				<Route path='/ebay' element={<Ebay />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
