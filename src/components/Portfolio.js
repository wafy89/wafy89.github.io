import React from "react";

const projects = [
  {
    title: "LexAI — Legal Assistant",
    description: "AI-powered legal document assistant. Python, FastAPI, LangChain, deployed on Render.",
    url: "https://laxai.onrender.com/",
  },
  {
    title: "PurchaseApp",
    description: "Internal procurement system — Vue.js, Vuex, Quasar, TypeScript, OpenAPI Generator",
  },
  {
    title: "PhotoApp",
    description: "Product photo management system — Vue 3, Pinia, Quasar, TypeScript, Vite, Keycloak",
  },
  {
    title: "Shared Component Library",
    description: "npm-based design system with unified UI components, design tokens, and utilities — used across all microfrontends",
  },
  {
    title: "Movie App",
    description: "React.js with Hooks, Styled Components, React Router",
    url: "http://wafiamer.com/MovieApp/",
  },
  {
    title: "Cocktail Master",
    description: "React.js, Material UI Components, React Router",
    url: "https://wafiamer.com/cocktail-master-app/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolioContainer" id="portfolio">
      <p className="section-label">Portfolio</p>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Enterprise systems and applications I've built and shipped.
      </p>
      <div className="projects">
        {projects.map((p) => {
          const CardWrapper = p.url ? "a" : "div";
          const cardProps = p.url
            ? { href: p.url, target: "_blank", rel: "noreferrer" }
            : {};

          return (
            <CardWrapper key={p.title} {...cardProps} className="projectCard">
              <div className="projectTop">
                {p.url && (
                  <div className="projectArrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="projectBottom">
                <h3 className="projectTitle">{p.title}</h3>
                <p className="projectDescription">{p.description}</p>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
