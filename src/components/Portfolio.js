import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolioContainer" id="portfolio">
        <Fade bottom>
          <div className="pageTitleContainer">
            <div className="pageTitle">Portfolio</div>
          </div>
        </Fade>
        <div className="projects">
          <a
            className="link"
            target="_blank"
            href="http://wafiamer.com/MovieApp/"
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
            href="https://wafiamer.com/cocktail-master-app/"
          >
            <Fade right>
              <div className=" project pink">
                <h3 className="projectTitle"> Cocktail Master </h3>
                <h5 className="projectDescription">
                  {" "}
                  Technologies used:React.js , Material UI Components,
                  ReactRouter
                </h5>
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
                <h5 className="projectDescription">
                  {" "}
                  a website about my son Technologies used: HTML5 , CSS, Vanilla
                  JS, Glider.js.
                </h5>
              </div>
            </Fade>
          </a>

          <a
            className="link"
            target="_blank"
            href="https://wafiamer.com/HTML-CSS-PORTFOLIO/"
          >
            <Fade right>
              <div className=" project green">
                <h3 className="projectTitle"> HTML-CSS-PORTFOLIO</h3>
                <h5 className="projectDescription">
                  {" "}
                  Technologies used:HTML5 , Sass{" "}
                </h5>
              </div>
            </Fade>
          </a>
          <a
            className="link"
            target="_blank"
            href="https://github.com/wafy89/Todo-API"
          >
            <Fade left>
              <div className=" project grey">
                <h3 className="projectTitle"> Todo API </h3>
                <h5 className="projectDescription">
                  {" "}
                  an Express Server for a Todo-APP <br />
                  Technologies used: express , Mongoose, JWT Token.
                </h5>
              </div>
            </Fade>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
