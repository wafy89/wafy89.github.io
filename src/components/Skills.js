import React, { Component } from 'react'

import Skill from './Skill';
export class Skills extends Component {
    constructor(props){
        super(props)
        this.state={
            skills:[{skillName:"CSS", level:80},{skillName:"HTML", level:85},{skillName:"JavaScript", level:90},{skillName:"React", level:85},{skillName:"Node-js", level:50},{skillName:"Express", level:65},{skillName:"Mongoose", level:65}]
        }
    }
    render() {
        return (
            <div className="skillsContainer" id="skills" >
                <div className="pageTitle" >SKILLS</div>
                <div className="graphic">
              {this.state.skills.map(item => <Skill skill={item.skillName} key={item.skillName} level={item.level} />)}
                </div>
            </div>
        )
    }
}

export default Skills
