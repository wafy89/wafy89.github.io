import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "LexAI — Legal Assistant",
    description: "AI-powered legal document assistant. Python, FastAPI, LangChain, deployed on Render.",
    url: "https://laxai.onrender.com/",
    accent: "accent-amber",
    featured: true,
  },
  {
    title: "PurchaseApp",
    description: "Internal procurement system — Vue.js, Vuex, Quasar, TypeScript, OpenAPI Generator",
    accent: "accent-green",
  },
  {
    title: "PhotoApp",
    description: "Product photo management system — Vue 3, Pinia, Quasar, TypeScript, Vite, Keycloak",
    accent: "accent-purple",
  },
  {
    title: "Shared Component Library",
    description: "npm-based design system with unified UI components, design tokens, and utilities — used across all microfrontends",
    accent: "accent-rose",
  },
  {
    title: "Movie App",
    description: "React.js with Hooks, Styled Components, React Router",
    url: "http://wafiamer.com/MovieApp/",
    accent: "accent-slate",
  },
  {
    title: "Cocktail Master",
    description: "React.js, Material UI Components, React Router",
    url: "https://wafiamer.com/cocktail-master-app/",
    accent: "accent-blue",
    featured: true,
  },
];

const Portfolio = () => {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolioContainer" id="portfolio" ref={sectionRef}>
      <p className="reveal reveal-delay-1 section-label">Portfolio</p>
      <h2 className="reveal reveal-delay-2 section-title">Featured Projects</h2>
      <p className="reveal reveal-delay-2 section-subtitle">
        Enterprise systems and applications I've built and shipped.
      </p>
      <div className="projects">
        {projects.map((p, i) => {
          const CardWrapper = p.url ? "a" : "div";
          const cardProps = p.url
            ? { href: p.url, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <CardWrapper
              key={p.title}
              {...cardProps}
              className={`projectCard bezel-outer${p.featured ? " featured" : ""} reveal reveal-delay-${Math.min(i + 3, 6)}`}
            >
              <div className="projectContent bezel-inner">
                <div className="projectTop">
                  <div className={`projectAccent ${p.accent}`} />
                  <div className="projectLinks">
                    {p.sourceUrl && (
                      <a href={p.sourceUrl} target="_blank" rel="noreferrer" className="projectSourceLink" onClick={(e) => e.stopPropagation()} title="View source on GitHub">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                    )}
                    {p.url && (
                      <div className="projectArrowCircle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className="projectBottom">
                  <h3 className="projectTitle">{p.title}</h3>
                  <p className="projectDescription">{p.description}</p>
                </div>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
