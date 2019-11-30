import React from 'react';


const Button = ({ title, url }) => {
        return(
            <div className="container__buttons">
                <a href={url}>{title}</a>
            </div>
        )
}

export default Button;
