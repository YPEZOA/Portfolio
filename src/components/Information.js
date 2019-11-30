import React from 'react';

const Information = ({ fullName, career, bio }) => {
    return (
    <div className="information-container">
        <h1>{ fullName }</h1>
        <h2>{ career }</h2>
        <p>{ bio }</p>
    </div>
    )
}

Information.displayName = 'Information';

export default Information;