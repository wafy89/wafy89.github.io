import React, { useEffect, useRef } from "react";

const education = [
  {
    degree: "MSIT — Software Engineering (AI Specialization)",
    school: "Master School Institute of Technology, Berlin",
    year: "2026",
    hours: "1,400 teaching hours",
    focus: "Python, FastAPI, SQL, REST APIs, Generative AI, LLMs, Prompt Engineering, LLM Evaluation, AI API Integration, Deployment",
    featured: true,
  },
  {
    degree: "Web Development Program (AZAV Certified, Full-Time)",
    school: "Digital Career Institute (DCI), Germany",
    year: "2020",
    hours: "1,900 training hours",
    focus: "JavaScript (ES6+), HTML, CSS/SCSS, Responsive Design, React, Redux, Node.js, Express, MongoDB, JWT Auth, REST APIs, Git, Agile, Software Development I–III",
  },
  {
    degree: "Higher National Diploma (Level 5) — Computing & Business Applications",
    school: "Syrian Virtual University",
    year: "2012",
    focus: "Programming, Website Design, E-Business Development, E-Commerce Technology, Data Analysis & Database Design, Marketing for E-Commerce",
  },
];

const strengths = [
  "Strong analytical and problem-solving skills",
  "High ownership and initiative",
  "Excellent communication and teamwork",
  "Ability to deliver high-quality work under pressure",
];

const Education = () => {
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
    <section className="educationContainer" id="education" ref={sectionRef}>
      <p className="reveal reveal-delay-1 section-label">Education</p>
      <h2 className="reveal reveal-delay-2 section-title">Learning & Growth</h2>
      <div className="eduGrid">
        {education.map((edu, i) => (
          <div
            key={edu.degree}
            className={`eduCard${edu.featured ? " featured" : ""} reveal reveal-delay-${Math.min(i + 3, 5)}`}
          >
            <div className="cardOuter bezel-outer">
              <div className="cardInner bezel-inner">
                <div className="eduHeader">
                  <span className="eduYear">{edu.year}</span>
                  {edu.hours && <span className="eduHours">{edu.hours}</span>}
                </div>
                <h3 className="eduDegree">{edu.degree}</h3>
                <p className="eduSchool">{edu.school}</p>
                <p className="eduFocus">{edu.focus}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="strengthsRow reveal reveal-delay-6">
        <div className="cardOuter bezel-outer strengthsShell">
          <div className="cardInner bezel-inner strengthsInner">
            <h3 className="strengthsTitle">Strengths</h3>
            <div className="strengthsList">
              {strengths.map((s, i) => (
                <span key={i} className="strengthPill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
