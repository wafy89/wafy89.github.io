import React, { Component } from "react";
import myImg from "../assists/wafi3.jpg";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import AnchorLink from "react-anchor-link-smooth-scroll";
class About extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        <Fade left>
          <div className="homeTextContainer">
            <h2>I’m Wafi</h2>
            <h4>Junior front-end web developer</h4>
            <Bounce>
              <AnchorLink href="#contact">
                <button className="hireMeBTN">Hire Me</button>
              </AnchorLink>
            </Bounce>
          </div>
        </Fade>
        <Fade right>
          <div className="homeImage">
            <img className="img" src={myImg} alt="wafi" />
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
