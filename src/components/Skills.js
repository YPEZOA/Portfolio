import React from 'react';

const Skills = ({ name, image }) => {
    return (
        <div className="main-skills">
            <div className="skills-container">
             <img alt="logo" src={image}></img>    
             {name}
            </div>
        </div>
    );  
}

export default Skills;