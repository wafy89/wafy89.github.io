import './App.css';
import NavBar from './views/NavBar';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import About from './views/About.jsx';
import Skills from './views/Skills';
import Contact from './views/Contact';
import Footer from './views/Footer';

function App() {
	return (
		<div className="App dark:bg-slate-600">
			<NavBar />
			<div className="appContainer">
				<Home />
				<About />
				<Skills />
				<Portfolio />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
