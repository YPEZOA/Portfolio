import React from 'react';

import '../styles/skills.css';

const Skills = ({ data }) => {
    return (
    <div className="main-container">
        <h1>Conocimientos |</h1>

            {data.skills.map((data, key) => {
                const { url, name, image, progress } = data;
                return (
                    <div className="container-skills" key={key}>
                        <a href={url} target="blank"><img alt="icono" src={image}/></a>
                        <strong><p>{name}</p></strong>
                        <span>{`Progreso ${progress}`}</span>
                    </div>)}
            )}
        </div>);
}

export default Skills;