import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="appContainer" id="main-content">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
