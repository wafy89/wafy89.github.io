import React, { useEffect, useRef } from "react";

const contactItems = [
  { label: "Phone", value: "+49 1590 6501550" },
  { label: "Email", value: "wafy89@gmail.com" },
  { label: "Location", value: "Leipzig, Germany" },
  { label: "Website", value: "wafiamer.com" },
  { label: "GitHub", value: "github.com/wafy89" },
  { label: "Languages", value: "AR · EN · DE" },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r) => r.classList.add("visible"));
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutContainer" id="about" ref={sectionRef}>
      <p className="reveal reveal-delay-1 section-label">Profile</p>
      <h2 className="reveal reveal-delay-2 section-title">About</h2>
      <p className="reveal reveal-delay-2 section-subtitle">
        Full-Stack Developer with 5+ years of experience building scalable, high-performance applications.
        Strong background in React, Microfrontends, Spring Boot, PostgreSQL, and certified in AI Engineering.
      </p>
      <div className="aboutGrid">
        <div className="aboutCardMain reveal reveal-delay-3">
          <div className="cardOuter bezel-outer">
            <div className="cardInner bezel-inner">
              <p className="aboutBio">
                Full-Stack Developer with 5+ years of experience building scalable, high-performance applications.
                Strong background in React, Microfrontends, Spring Boot, PostgreSQL, and certified in AI Engineering
                including LLMs, RAG, and Prompt Engineering. Fast learner, problem-solver, and highly adaptable —
                seeking impactful roles in FinTech, AI-powered systems, or enterprise software.
              </p>
            </div>
          </div>
        </div>
        {contactItems.map((item, i) => (
          <div key={item.label} className={`aboutCard reveal reveal-delay-${Math.min(i + 3, 6)}`}>
            <div className="cardOuter bezel-outer">
              <div className="cardInner bezel-inner">
                <span className="aboutCardLabel">{item.label}</span>
                <span className="aboutCardValue">{item.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
