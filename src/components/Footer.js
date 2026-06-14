import React from "react";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerInfo">
        <p className="footerName">Wafi Amer</p>
        <p>Full-Stack Developer & AI Engineering Specialist</p>
        <p>
          <a href="mailto:wafy89@gmail.com">wafy89@gmail.com</a>
        </p>
      </div>
      <div className="footerLinks">
        <a href="https://github.com/wafy89?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://wafiamer.com" target="_blank" rel="noreferrer">Website</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footerCopyright">
        &copy; {new Date().getFullYear()} Wafi Amer. Built with React.
      </div>
    </footer>
  );
}

export default Footer;
