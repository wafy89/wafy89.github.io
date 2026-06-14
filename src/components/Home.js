import React, { useRef, useEffect, useState } from "react";
import myImg from "../assists/wafi3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const titles = [
  "Full-Stack Web Developer",
  "AI Engineering Specialist",
];

const Home = () => {
  const sectionRef = useRef(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [revealChars, setRevealChars] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r) => r.classList.add("visible"));
          setRevealChars(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!revealChars) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [revealChars]);

  const currentTitle = titles[titleIndex];

  return (
    <section className="homeContainer" id="home" ref={sectionRef}>
      <div className="homeTextContainer">
        <div className="homeEyebrow reveal reveal-delay-1">
          <span className="eyebrow-pill">
            <span className="eyebrow-dot" />
            Available for work
          </span>
        </div>
        <h1 className="reveal reveal-delay-2">
          I'm <span className="name-gradient">Wafi Amer</span>
        </h1>
        <div className="homeTitleWrapper reveal reveal-delay-3">
          <div className="terminal-prompt" aria-label={currentTitle}>
            <span className="prompt-symbol">{">"}</span>
            <span className="prompt-text" key={titleIndex}>
              {currentTitle.split("").map((char, i) => (
                <span
                  key={i}
                  className="char-reveal"
                  style={{ animationDelay: `${i * 0.03}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <span className="cursor-blink">_</span>
          </div>
        </div>
        <p className="reveal reveal-delay-4 homeSubtitle">
          Building scalable, high-performance applications with React, Microfrontends, Spring Boot, and AI-powered systems. Based in Leipzig, Germany.
        </p>
        <div className="homeStats reveal reveal-delay-5">
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
        <div className="homeActions reveal reveal-delay-5">
          <AnchorLink href="#contact">
            <button className="cta-primary">
              Get in Touch
              <span className="btn-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </AnchorLink>
          <AnchorLink href="#portfolio">
            <button className="cta-secondary">
              View Work
              <span className="btn-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </AnchorLink>
        </div>
      </div>
      <div className="homeImage reveal reveal-delay-3">
        <div className="imageShell">
          <div className="imageFrameOuter">
            <div className="imageFrameInner">
              <div className="imagePortrait">
                <img src={myImg} alt="Wafi Amer" />
              </div>
            </div>
          </div>
          <div className="imageGlow" />
        </div>
      </div>
    </section>
  );
};

export default Home;
