import React, { useState, useEffect } from "react";
import myImg from "../assists/wafi.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const titles = [
  "Full-Stack Developer",
  "AI Engineering Specialist",
];

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const currentTitle = titles[titleIndex];

  useEffect(() => {
    const total = currentTitle.length;
    if (charCount >= total) {
      const switchTimer = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2500);
      return () => clearTimeout(switchTimer);
    }
    const typeTimer = setTimeout(() => {
      setCharCount((prev) => prev + 1);
    }, 30);
    return () => clearTimeout(typeTimer);
  }, [charCount, currentTitle.length, titleIndex]);

  useEffect(() => {
    setCharCount(0);
  }, [titleIndex]);

  return (
    <section className="homeContainer" id="home">
      <div className="homeTextContainer">
        <h1>Wafi Amer</h1>
        <div className="homeTitleWrapper">
          <div className="terminal-prompt" aria-label={currentTitle}>
            <span className="prompt-symbol">&gt;</span>
            <span className="prompt-text">
              {currentTitle.slice(0, charCount)}
            </span>
            <span className="cursor-blink">_</span>
          </div>
        </div>
        <p className="homeSubtitle">
          Building scalable, high-performance applications with React, Microfrontends, Spring Boot, and AI-powered systems. Based in Leipzig, Germany.
        </p>
        <div className="homeStats">
          <div className="homeStat">
            <span className="statNumber">5+</span>
            <span className="statLabel">Years Experience</span>
          </div>
          <div className="homeStat">
            <span className="statNumber">3</span>
            <span className="statLabel">Languages</span>
          </div>
          <div className="homeStat">
            <span className="statNumber">AI</span>
            <span className="statLabel">Certified</span>
          </div>
        </div>
        <div className="homeActions">
          <AnchorLink href="#contact" className="btn-primary">
            Get in Touch
          </AnchorLink>
          <AnchorLink href="#portfolio" className="btn-secondary">
            View Work
          </AnchorLink>
        </div>
      </div>
      <div className="homeImage">
        <div className="homePoster">
          <span>Idea</span>
          <span className="posterPipe">|</span>
          <span>Plan</span>
          <span className="posterPipe">|</span>
          <span>Build</span>
        </div>
        <img src={myImg} alt="Wafi Amer" />
      </div>
    </section>
  );
};

export default Home;
