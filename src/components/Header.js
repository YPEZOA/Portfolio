import React from 'react';
//Components
import Buttons from './Button';
import '../styles/header.css';
import logo from '../images/logo.png'

const Header = ({ data }) => {
        return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="navbar-header">
                <a className="navbar-brand" href="ww#">
                    <img src={logo} className="logo" alt="Brand"></img>
                </a>
            </div>
            {data.dataButtons.map((data, key) => {
                const { text, url } = data;
                return(
                <Buttons 
                    text={text} 
                    url={url}
                    key={key}
                />)
            })}
       </nav>);
}

export default Header;