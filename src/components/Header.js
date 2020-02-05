import React from 'react';
//Components
import Buttons from './Button';
//data
import data from '../constants/data';
import '../styles/Header.css';

const Header = () => {
        return (
        <div className="header-main">
            {data.dataButtons.map((data, key) => {
                const { text, url } = data;
                return(
                <Buttons 
                text={text} 
                url={url}
                key={key}/>)
            })}
       </div>
    );
}

export default Header;