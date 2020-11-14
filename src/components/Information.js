import React from 'react';
import '../styles/information.css'
import imageProfile from '../images/anonimous.jpg'

const Information = ({ fullName, career, bio }) => {
    return (
    <div className="information-container">
        <div className="container-content">
            <img className="imageProfile" src={imageProfile} alt="imageProfile"></img>
            <h2>{ fullName }</h2>
            <h3>{`${career} - Duoc Uc`}</h3>
            <p>{ bio }</p>
        </div>
    </div>);
}

Information.displayName = 'Information';

export default Information;