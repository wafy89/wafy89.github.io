import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Gecko DHL App",
    description: "Internal logistics platform for DHL. React, GraphQL, Apollo, Microfrontends, Material UI, Spring Boot, PostgreSQL, RabbitMQ, Gradle.",
    accent: "accent-amber",
    featured: true,
  },
  {
    title: "PurchaseApp",
    description: "Internal procurement system — Vue.js, Vuex, Quasar, TypeScript, OpenAPI Generator",
    url: "https://relaxdays.de/",
    accent: "accent-green",
  },
  {
    title: "PhotoApp",
    description: "Product photo management system — Vue 3, Pinia, Quasar, TypeScript, Vite, Keycloak",
    url: "https://relaxdays.de/",
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
                  {p.url && (
                    <div className="projectArrowCircle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  )}
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
