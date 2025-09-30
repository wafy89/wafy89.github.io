import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Skill from "./Skill";

const Skills = () => {
  const [skills] = useState([
    { skillName: "CSS", level: 80 },
    { skillName: "HTML", level: 85 },
    { skillName: "JavaScript", level: 95 },
    { skillName: "Vue", level: 95 },
    { skillName: "React", level: 85 },
    { skillName: "Node-js", level: 50 },
    { skillName: "Express", level: 50 },
    { skillName: "Mongoose", level: 50 },
    { skillName: "Springboot", level: 70 },
    { skillName: "Java", level: 50 },
    { skillName: "Postgres", level: 80 },
    { skillName: "Docker", level: 60 },
    { skillName: "Mongoose", level: 50 },
    { skillName: "GraphQL", level: 80 },
  ]);

  return (
    <div className="skillsContainer" id="skills">
      <Fade bottom>
        <div className="pageTitleContainer">
          <div className="pageTitle">SKILLS</div>
        </div>
      </Fade>
      <div className="graphic">
        {skills.map((item) => (
          <Skill
            skill={item.skillName}
            key={item.skillName}
            level={item.level}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
