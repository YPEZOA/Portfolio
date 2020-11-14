import React from 'react';
import '../styles/experience.css';

const Experience = ({ job, aboutJob, date }) => {
    return(
        <div className="main-containerExp">
            <h1>Experiencia |</h1>
            <div className="container-exp">
                <strong><span>{date}</span></strong>
                <h3>{job}</h3>
                <p>{aboutJob}</p>
            </div>
        </div>);
}

export default Experience;