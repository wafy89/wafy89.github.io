import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
	return (
		<div className="App">
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
