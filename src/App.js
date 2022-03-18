import { Routes, Route } from 'react-router-dom';
import { ContactButtons, Footer, Navbar } from './components';
import {
	Home,
	Amazon,
	Page404,
	Fba,
	Walmart,
	Ebay,
	Contact,
	Why,
	BlogsPage,
	SingleBlogPage,
} from './Pages';
import { AnimatePresence } from 'framer-motion';
function App() {
	return (
		<>
			<Navbar />
			<AnimatePresence>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/amazon' element={<Amazon />} />
					<Route path='/fba' element={<Fba />} />
					<Route path='/walmart' element={<Walmart />} />
					<Route path='/ebay' element={<Ebay />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/why' element={<Why />} />
					<Route path='/blog/:slug' element={<SingleBlogPage />} />
					<Route path='/blogs' element={<BlogsPage />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</AnimatePresence>
			<ContactButtons />
			<Footer />
		</>
	);
}

export default App;
