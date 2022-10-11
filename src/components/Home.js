import React, { Component } from 'react';
import myImg from '../assists/wafi3.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
class About extends Component {
	render() {
		return (
			<div
				className="homeContainer"
				id="home"
			>
				<div className="homeTextContainer">
					<h2>I’m Wafi</h2>
					<h4>Frontend web developer</h4>
					<AnchorLink href="#contact">
						<button className="hireMeBTN">Hire Me</button>
					</AnchorLink>
				</div>

				<div className="homeImage">
					<img
						className="img"
						src={myImg}
						alt="wafi"
					/>
				</div>
			</div>
		);
	}
}

export default About;
