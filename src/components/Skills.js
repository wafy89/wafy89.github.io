import React from "react";

const skillCategories = [
  {
    title: "Frontend Engineering",
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
  return (
    <section className="skillsContainer" id="skills">
      <p className="section-label">Capabilities</p>
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies and disciplines I bring to every project.
      </p>
      <div className="skillsRule" />
      <div className="skillsGrid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skillCategory">
            <h3 className="skillCatTitle">{cat.title}</h3>
            <div className="skillList">
              {cat.skills.map((s) => (
                <div key={s.name} className="skillItem">
                  <span className="skillItemName">{s.name}</span>
                  <span className="skillItemLevel">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
