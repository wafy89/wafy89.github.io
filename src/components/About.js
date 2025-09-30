
import React from "react";
import { Fade } from "react-awesome-reveal";


const About = () => {
  const age = new Date().getFullYear() - 1989;
  return (
    <div className="aboutContainer">
      <Fade bottom>
        <div className="pageTitleContainer">
          <div className="pageTitle" id="about">
            ABOUT ME
          </div>
        </div>
      </Fade>
      <div className="aboutText">
        <Fade left>
          <div className="aboutTextSection">
            <h2>Who's this guy?</h2>
            <h4>
              I'm Wafi Amer, {age} years old, originally from Syria and living in Leipzig, Germany, since 2017. I speak English, German, and Arabic. Outside of coding, I enjoy music, football, and spending time outdoors when the weather is nice.
            </h4>
          </div>
        </Fade>

        <Fade right>
          <div className="aboutTextSection">
            <h2>My Web Development Experience</h2>
            <h4>
              I am a full-stack web developer with 2.5 years of experience in React and Java/Spring Boot. At
              <a className="aboutLinks" href="https://www.avision-it.de/" target="_blank">Avision GmbH</a>,
              I was responsible for implementing and maintaining React projects to deliver the best user experience for colleagues across different departments. On the back-end, I have experience building REST APIs with Java/Spring Boot, connecting the frontend to databases, and handling business logic. I am also familiar with microservices architecture using Spring Boot and Docker, and have focused on micro-frontends in frontend development.
            </h4>
            <h4>
              Previously, I worked as a front-end developer with 2 years of experience in Vue.js at
              <a className="aboutLinks" href="https://relaxdays.de/" target="_blank">Relaxdays GmbH</a>.
              Before that, I completed a web development course at
              <a className="aboutLinks" href="https://digitalcareerinstitute.org/" target="_blank">Digital Career Institute</a>.
              During the course, I was the class tutor, helping classmates understand the material, which also deepened my own knowledge and skills.
            </h4>
          </div>
        </Fade>

        <Fade left>
          <div className="aboutTextSection">
            <h2>How I Chose This Career</h2>
            <h4>
              From 2009 to 2012, I studied for a
              <a className="aboutLinks" href="https://www.svuonline.org/en/program/hnd"> National Diploma in Computing and Business Application </a>
              at Syrian Virtual University. Although the program was business-focused, it included basic web development, which sparked my interest. At the time, web development was new in Syria and opportunities were limited. After moving to Germany, I pursued further courses and found my passion for this field.
            </h4>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
