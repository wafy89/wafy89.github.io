import React, { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Avision GmbH",
    location: "Remote / Munich",
    period: "Apr. 2023 – Sep. 2025",
    description:
      "Avision is a German enterprise software company specializing in modernizing large-scale legacy systems.",
    highlights: [
      "Served as the main frontend developer for the enterprise microfrontends platform",
      "Designed and implemented the Microfrontends architecture used across the project",
      "Built an internal shared component library published via npm, enabling all microfrontends to share unified UI components, design tokens, and utilities",
      "Collaborated closely with DevOps and backend teams on compatibility, versioning strategy, and deployment workflows",
      "Acted as the primary reference for frontend decisions, architectural patterns, and code quality",
      "Developed full-stack features using React, GraphQL, Apollo Client, Spring Boot, and PostgreSQL",
    ],
    projects: [
      {
        name: "Gecko DHL App",
        desc: "Internal logistics platform for DHL. React, GraphQL, Apollo, Microfrontends, Material UI, Spring Boot, PostgreSQL, RabbitMQ, Gradle.",
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "Relaxdays GmbH",
    location: "Leipzig",
    period: "Apr. 2021 – Mar. 2023",
    description:
      "Relaxdays is one of Germany's largest e-commerce retailers, developing internal digital platforms to support logistics, product management, and marketplace operations.",
    highlights: [
      "Developed and maintained Vue.js applications used by internal teams",
      "Collaborated with UI/UX designers and stakeholders to improve workflows",
      "Integrated APIs using OpenAPI Generator and implemented secure authentication (Keycloak)",
    ],
    projects: [
      {
        name: "PurchaseApp",
        desc: "Internal procurement system — Vue.js, Vuex, Quasar, TypeScript, OpenAPI Generator",
      },
      {
        name: "PhotoApp",
        desc: "Product photo management system — Vue 3, Pinia, Quasar, TypeScript, Vite, Keycloak",
      },
    ],
  },
];

const Experience = () => {
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
    <section className="experienceContainer" id="experience" ref={sectionRef}>
      <p className="reveal reveal-delay-1 section-label">Career</p>
      <h2 className="reveal reveal-delay-2 section-title">Experience</h2>
      <p className="reveal reveal-delay-2 section-subtitle">
        Building enterprise software and e-commerce platforms for Germany's leading companies.
      </p>
      <div className="expTimeline">
        {experiences.map((exp, i) => (
          <div key={exp.company} className={`expEntry reveal reveal-delay-${Math.min(i + 3, 5)}`}>
            <div className="expMarkerLine">
              <div className="expDot" />
              <div className="expLine" />
            </div>
            <div className="expCardShell bezel-outer">
              <div className="expCard bezel-inner">
                <div className="expHeader">
                  <div className="expHeaderLeft">
                    <span className="expCompany">{exp.company}</span>
                    <span className="expLocation">{exp.location}</span>
                  </div>
                  <span className="expPeriod">{exp.period}</span>
                </div>
                <h3 className="expRole">{exp.role}</h3>
                <p className="expDesc">{exp.description}</p>
                <ul className="expHighlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                {exp.projects.length > 0 && (
                  <div className="expProjects">
                    {exp.projects.map((p) => (
                      <div key={p.name} className="expProjectPill">
                        <span className="expProjectName">{p.name}</span>
                        <span className="expProjectDesc">{p.desc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
