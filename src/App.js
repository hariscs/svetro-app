import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './Pages/Home';
import NotFound from './Pages/404/NotFound';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<Home />} />
			</Routes>
			<h1>Hello, world</h1>
			<Footer />
		</div>
	);
}

export default App;
