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
            href="https://affectionate-austin-c1fbbc.netlify.app/"
          >
            <Fade left>
              <div className=" project blue">
                <h3 className="projectTitle"> Movie App </h3>
                <h5 className="projectDescription">
                  Technologies used: React.js with Hooks , Styled Components,
                  ReactRouter 
                </h5>
              </div>
            </Fade>{" "}
          </a>
          <a
            className="link"
            target="_blank"
            href="https://laughing-bartik-3997d8.netlify.app/"
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
            href="https://5f0c63aa82c1432f1483b32b--laughing-bartik-3997d8.netlify.app/"
          >
            <Fade left>
              <div className=" project yellow">
                <h3 className="projectTitle"> </h3>
                <h5 className="projectDescription"> </h5>
              </div>
            </Fade>
          </a>
          <a
            className="link"
            target="_blank"
            href="https://affectionate-austin-c1fbbc.netlify.app/?fbclid=IwAR2I0j4xA7dch6ZRCJ5OpdntEMnhjS7T77G5GTZDQYD-YRkK_iQpcDr3w2M"
          >
            <Fade right>
              <div className=" project green">
                <h3 className="projectTitle"> </h3>
                <h5 className="projectDescription"> </h5>
              </div>
            </Fade>
          </a>
        </div>
      </div>
    );
  }
}

export default Portfolio;
