import React from 'react';

const Buttons = ({ text, url }) => {
    return(
        <div className="container-buttons" id="buttons">
            <a id="button" className="button_text" href={url}>{text}</a>
        </div>);
}
    
export default Buttons;