import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Use from './pages/Use';
import Roadmap from './pages/Roadmap';
import ButtonGradient from './assets/svg/ButtonGradient';

const App = () => {
	return (
		<BrowserRouter>
			<>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/home'
						element={<Home />}
					/>
					<Route
						path='/About'
						element={<About />}
					/>
					<Route
						path='/Features'
						element={<Features />}
					/>
					<Route
						path='/Use'
						element={<Use />}
					/>
					<Route
						path='/Roadmap'
						element={<Roadmap />}
					/>
				</Routes>
				<Footer />

				<ButtonGradient />
			</>
		</BrowserRouter>
	);
};

export default App;
