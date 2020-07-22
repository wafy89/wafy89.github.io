import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class Portfolio extends Component {
 
  render() {
    return (
      <div className="portfolioContainer" id="portfolio">
        <div className="pageTitle" >Portfolio</div>
        <div className="projects">
          <a
            className="link"
            target="_blank"
            href="http://wafiamer.codes/MovieApp/"
          >
            <Fade left>
              <div className="project blue">
                <h3 className="projectTitle"> Movie App </h3>
                <h5 className="projectDescription">
                  Technologies used: React.js with Hooks , Styled Components,
                  ReactRouter 
                </h5>
              </div>
            </Fade>
          </a>
          <a
            className="link"
            target="_blank"
            href="https://wafiamer.codes/cocktail-master-app/"
          >
            <Fade right>
              <div className=" project pink">
                <h3 className="projectTitle"> Cocktail Master </h3>
                <h5 className="projectDescription"> Technologies used:React.js  , Material UI Components,
                  ReactRouter</h5>
              </div>
            </Fade>
          </a>
          <a
            className="link"
            target="_blank"
            href="https://competent-fermat-dfa6e3.netlify.app/"
          >
            <Fade left>
              <div className=" project yellow">
                <h3 className="projectTitle"> Philipp </h3>
                <h5 className="projectDescription"> a website about my son 
                Technologies used: HTML5 , CSS, Vanilla JS, Glider.js.
                 </h5>
              </div>
            </Fade>
          </a>
          <a
            className="link"
            target="_blank"
            href="https://wafiamer.codes/HTML-CSS-PORTFOLIO/"
          >
            <Fade right>
              <div className=" project green">
                <h3 className="projectTitle"> HTML-CSS-PORTFOLIO</h3>
                <h5 className="projectDescription"> Technologies used:HTML5 , Sass  </h5>
              </div>
            </Fade>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
