//components/
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
//pages/
import About from './pages/About';
import Tours from './pages/Tours';

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Tours />
			<Services />
			<Footer />
		</>
	);
}

export default App;
