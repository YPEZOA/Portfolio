import React from 'react';
import '../styles/Information.css'

const Information = ({ fullName, career, bio }) => {
    return (
    <div className="information-container">
        <div className="container-content">
        <h1>Información |</h1>
        <h2>{ fullName }</h2>
        <h3>{ career }</h3>
        <p>{ bio }</p>
        </div>
    </div>
    )
}

Information.displayName = 'Information';

export default Information;