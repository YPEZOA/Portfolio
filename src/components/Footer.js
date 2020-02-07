import React from 'react';
//Assets
import '../styles/Footer.css';
//Constants
import data from '../constants/data';

const Footer = () => {
    return (
        <div className="main-footer">
            <div>
            {data.footer.map((data) => {
                const { url, icon } = data;
                return (
                    <div className="container-footer">
                        <a href={url} target="blank"><img alt="icon" src={icon}></img></a>
                    </div>)
            })}
            </div>
            <small>Copyright © <strong>YusyAndrés</strong>  </small>
            <p>y.pezoa22@gmail.com - +56 944340236</p> 
        </div>
    )
}

export default Footer;