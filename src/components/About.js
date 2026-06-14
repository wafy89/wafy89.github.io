import React from "react";

const details = [
  { label: "Phone", value: "+49 1590 6501550", href: "tel:+4915906501550" },
  { label: "Email", value: "wafy89@gmail.com", href: "mailto:wafy89@gmail.com" },
  { label: "Location", value: "Leipzig, Germany" },
  { label: "Website", value: "wafiamer.com", href: "https://wafiamer.com/" },
  { label: "GitHub", value: "github.com/wafy89", href: "https://github.com/wafy89" },
  { label: "Languages", value: "Arabic · English · German" },
];

const About = () => {
  return (
    <section className="aboutContainer" id="about">
      <p className="section-label">Profile</p>
      <h2 className="section-title">About</h2>
      <p className="section-subtitle">
        Full-Stack Developer with 5+ years of experience building scalable, high-performance applications.
        Strong background in React, Microfrontends, Spring Boot, PostgreSQL, and certified in AI Engineering.
      </p>
      <p className="aboutText">
        Full-Stack Developer with 5+ years of experience building scalable, high-performance applications.
        Strong background in React, Microfrontends, Spring Boot, PostgreSQL, and certified in AI Engineering
        including LLMs, RAG, and Prompt Engineering. Fast learner, problem-solver, and highly adaptable —
        seeking impactful roles in FinTech, AI-powered systems, or enterprise software.
      </p>
      <div className="aboutRule" />
      <div className="aboutGrid">
        {details.map((item) => (
          <div key={item.label} className="aboutDetail">
            <span className="aboutDetailLabel">{item.label}</span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer" className="aboutDetailValue">
                {item.value}
              </a>
            ) : (
              <span className="aboutDetailValue">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
