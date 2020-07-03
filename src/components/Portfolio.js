import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
export class Portfolio extends Component {
    render() {
        return (
            
            <div className="portfolioContainer" id="portfolio">
                <div className="pageTitle">Portfolio</div>
                <div className="projects">
                <Fade left><div className=" project blue">
                    <div className="icon"> asdf</div>
                    <h3 className="projectTitle"> </h3>
                    <h5 className="projectDescription"> </h5>
                </div></Fade>
                <Fade right><div className=" project yellow">
                    <div className="icon"> asdf</div>
                    <h3 className="projectTitle"> </h3>
                    <h5 className="projectDescription"> </h5>
                </div></Fade>
                <Fade left><div className=" project pink">
                    <div className="icon"> asdf</div>
                    <h3 className="projectTitle"> </h3>
                    <h5 className="projectDescription"> </h5>
                </div></Fade>
                <Fade right><div className=" project green">
                    <div className="icon">asd </div>
                    <h3 className="projectTitle"> </h3>
                    <h5 className="projectDescription"> </h5>
                </div></Fade>
                </div>
            </div>
        )
    }
}

export default Portfolio
