import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class Portfolio extends Component {
  /*  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Movie App",
          technologies: "React.js with Hooks , Styled Components, ReactRouter ",
          color: "blue",
          link:
            "https://affectionate-austin-c1fbbc.netlify.app/?fbclid=IwAR2I0j4xA7dch6ZRCJ5OpdntEMnhjS7T77G5GTZDQYD-YRkK_iQpcDr3w2M",
          fade: "left",
        },
        {
          title: "Cocktail Master",
          technologies:
            "React.js , Material UI Components, ReactRouter , HTML , CSS",
          color: "pink",
          link:
            "https://affectionate-austin-c1fbbc.netlify.app/?fbclid=IwAR2I0j4xA7dch6ZRCJ5OpdntEMnhjS7T77G5GTZDQYD-YRkK_iQpcDr3w2M",
          fade: "right",
        },
        {
          title: "Cocktail Master",
          technologies:
            "React.js , Material UI Components, ReactRouter , HTML , CSS",
          color: "green",
          link:
            "https://affectionate-austin-c1fbbc.netlify.app/?fbclid=IwAR2I0j4xA7dch6ZRCJ5OpdntEMnhjS7T77G5GTZDQYD-YRkK_iQpcDr3w2M",
          fade: "left",
        },
        {
          title: "Cocktail Master",
          technologies:
            "React.js , Material UI Components, ReactRouter , HTML , CSS",
          color: "yellow",
          link:
            "https://affectionate-austin-c1fbbc.netlify.app/?fbclid=IwAR2I0j4xA7dch6ZRCJ5OpdntEMnhjS7T77G5GTZDQYD-YRkK_iQpcDr3w2M",
          fade: "right",
        },
      ],
    };
  } */
  render() {
    return (
      <div className="portfolioContainer" id="portfolio">
        <div className="pageTitle">Portfolio</div>
        <div className="projects">
          <a
            className="link"
            target="_blank"
            href="https://affectionate-austin-c1fbbc.netlify.app/?fbclid=IwAR2I0j4xA7dch6ZRCJ5OpdntEMnhjS7T77G5GTZDQYD-YRkK_iQpcDr3w2M"
          >
            <Fade left>
              <div className=" project blue">
                <h3 className="projectTitle"> Movie App </h3>
                <h5 className="projectDescription">
                  Technologies used: "React.js with Hooks , Styled Components,
                  ReactRouter "{" "}
                </h5>
              </div>
            </Fade>{" "}
          </a>
          <a
            className="link"
            target="_blank"
            href="https://affectionate-austin-c1fbbc.netlify.app/?fbclid=IwAR2I0j4xA7dch6ZRCJ5OpdntEMnhjS7T77G5GTZDQYD-YRkK_iQpcDr3w2M"
          >
            <Fade right>
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
            <Fade left>
              <div className=" project pink">
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
