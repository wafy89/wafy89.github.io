import React from 'react'
import Slide from 'react-reveal/Slide';
function Skill(props) {
    return (
        <div className="graphic-bg">
            <div className="graphic-skill">
                <div className="skill-level ">{props.skill}</div>
                <div className={props.skill+ " skill-level-fill "} ></div>
            </div>
            <div className="skill-level-number">{props.level}%</div>
        </div>
    )
}

export default Skill
