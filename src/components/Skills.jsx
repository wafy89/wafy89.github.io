import React, { Component } from 'react';
import Skill from './Skill';



function Skills() {
	const skills= [
				{ skillName: 'CSS', level: 80 },
				{ skillName: 'HTML', level: 85 },
				{ skillName: 'JavaScript', level: 95 },
				{ skillName: 'Vue', level: 95 },
				{ skillName: 'React', level: 85 },
				{ skillName: 'Node-js', level: 50 },
				{ skillName: 'Express', level: 50 },
				{ skillName: 'Mongoose', level: 50 },
			]
	return (
	<div
				className="skillsContainer"
				id="skills"
			>
				<div className="pageTitleContainer">
					<div className="pageTitle">SKILLS</div>
				</div>
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
	)
}

export default Skills

