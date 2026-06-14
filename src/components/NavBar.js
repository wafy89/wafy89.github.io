import React, { useState, useEffect, useCallback } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assists/logo4.png";

const NavBar = () => {
  const [extend, setExtend] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolling = window.scrollY > 40;
    if (isScrolling !== scrolling) setScrolling(isScrolling);
  }, [scrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    return () => document.body.classList.remove("menu-open");
  }, []);

  const handleNavClick = () => {
    setExtend(false);
    document.body.classList.remove("menu-open");
  };

  const toggleMenu = () => {
    const next = !extend;
    setExtend(next);
    document.body.classList.toggle("menu-open", next);
  };

  const navClass = ["navContainer", scrolling ? "scroll" : ""].filter(Boolean).join(" ");

  const links = ["Home", "About", "Experience", "Skills", "Education", "Portfolio"];

  return (
    <nav className={navClass}>
      <div className="logoContainer">
        <a href="#home" onClick={handleNavClick}>
          <img className="logoImage" src={logo} alt="Wafi Amer" />
        </a>
      </div>
      <div className={`navigation${extend ? " extend" : ""}`}>
        {links.map((item, i) => (
          <div key={item} className="navItem" style={{ transitionDelay: extend ? `${0.05 + i * 0.06}s` : "0s" }}>
            <AnchorLink href={`#${item.toLowerCase()}`} onClick={handleNavClick}>
              {item}
            </AnchorLink>
          </div>
        ))}
        <div className="navItem contact">
          <AnchorLink href="#contact" onClick={handleNavClick}>Contact</AnchorLink>
        </div>
      </div>
      <button onClick={toggleMenu} className="burgerIcon" aria-label="Toggle menu">
        <div className={`line up${extend ? " extend" : ""}`} />
        <div className={`line middle${extend ? " extend" : ""}`} />
        <div className={`line down${extend ? " extend" : ""}`} />
      </button>
    </nav>
  );
};

export default NavBar;
