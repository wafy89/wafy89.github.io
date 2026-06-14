import React, { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    featured: true,
    accent: "accent-amber",
    skills: [
      { name: "React", level: 90 },
      { name: "Vue.js", level: 95 },
      { name: "Remix", level: 70 },
      { name: "Microfrontends", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Material UI", level: 90 },
      { name: "Tailwind", level: 85 },
      { name: "Redux", level: 80 },
      { name: "GraphQL", level: 80 },
      { name: "Jest / Vitest", level: 78 },
    ],
  },
  {
    title: "AI Engineering",
    featured: true,
    accent: "accent-purple",
    skills: [
      { name: "LLMs", level: 82 },
      { name: "RAG", level: 78 },
      { name: "Prompt Engineering", level: 85 },
      { name: "LangChain", level: 70 },
      { name: "AI API Integration", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    accent: "accent-green",
    skills: [
      { name: "Spring Boot", level: 70 },
      { name: "Node.js / Express", level: 72 },
      { name: "FastAPI", level: 65 },
      { name: "PostgreSQL", level: 80 },
      { name: "Prisma ORM", level: 75 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Architecture & System Design",
    accent: "accent-slate",
    skills: [
      { name: "Component-driven Architecture", level: 88 },
      { name: "Scalable Frontend Ecosystems", level: 82 },
      { name: "API Design", level: 78 },
      { name: "Modular Monorepos", level: 75 },
      { name: "Code Quality Patterns", level: 85 },
    ],
  },
  {
    title: "Tools & Workflow",
    accent: "accent-rose",
    skills: [
      { name: "Git", level: 88 },
      { name: "CI/CD", level: 65 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 72 },
      { name: "Scrum / Agile", level: 85 },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((r) => r.classList.add("visible"));
          setTimeout(() => {
            el.querySelectorAll(".skillBarInner").forEach((bar) => bar.classList.add("animate"));
          }, 500);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skillsContainer" id="skills" ref={sectionRef}>
      <p className="reveal reveal-delay-1 section-label">Skills</p>
      <h2 className="reveal reveal-delay-2 section-title">Tech Stack</h2>
      <p className="reveal reveal-delay-2 section-subtitle">
        Technologies and disciplines I bring to every project.
      </p>
      <div className="skillsGrid">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.title}
            className={`skillCategoryCard${cat.featured ? " featured" : ""} reveal reveal-delay-${Math.min(i + 3, 6)}`}
          >
            <div className="cardOuter bezel-outer">
              <div className="cardInner bezel-inner">
                <div className={`skillCatAccent ${cat.accent}`} />
                <h3 className="skillCatTitle">{cat.title}</h3>
                <div className="skillList">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="skillItem">
                      <div className="skillItemHeader">
                        <span className="skillItemName">{s.name}</span>
                        <span className="skillItemLevel">{s.level}%</span>
                      </div>
                      <div className="skillBarOuter">
                        <div
                          className="skillBarInner"
                          style={{ "--skill-level": `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
