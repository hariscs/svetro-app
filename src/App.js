import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Amazon, Page404 } from './Pages';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/amazon' element={<Amazon />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
