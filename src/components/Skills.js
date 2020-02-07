import React from 'react';
import data from '../constants/data';
import '../styles/Skills.css';

const Skills = () => {
    return (
    <div className="main-container">
        <h1>Conocimientos |</h1>
            {data.skills.map((data) => {
                const { url, name, image, progress } = data;
                return (
            <div className="container-skills">
                <a href={url} target="blank"><img alt="icono" src={image}/></a>
                <strong><p>{name}</p></strong>
                <span>{`Progress ${progress}`}</span>
                </div>)}
           )}
        </div>)
}

export default Skills;