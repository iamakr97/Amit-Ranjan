import React from 'react'
import './Skills.css';
import { skillData } from '../../Data/SkillData';

function Skills() {
    return (
        <div id="skills" className='skill'>
            <h2 className='skill-heading'>Skills</h2>
            <p className='skill-desc'>Here are some of my basic skills on which I have been working and Learning.</p>
            <div className="skill-container">
                {
                    skillData.map((skill, index) => {
                        return <div key={index} className='skill-card'>
                            <p id='skill-title'>{skill.title}</p>
                            <div className="tech-card-items">
                            {(skill.skills).map((tech) => {
                                return <div className='tech-card'>
                                    <img src={tech.image} alt="logo" height="20px" />
                                    <p>{tech.name}</p>
                                </div>
                            })}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Skills;