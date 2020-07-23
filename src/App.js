import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.scss";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="appContainer">
        <Home />
        <About/>
        <Skills/>
        <Portfolio />
        <Contact/></div>
        <Footer/>
      </div>
    );
  }
}

export default App;
