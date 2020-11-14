import React from 'react';
//Assets
import '../styles/footer.css';

const Footer = ({ data }) => {
    return (
        <div className="main-footer">
            <div>
                {data.footer.map((data, key) => {
                    const { url, icon } = data;
                    return (
                        <div className="container-footer" key={key}>
                            <a href={url} target="blank"><img alt="icon" src={icon}></img></a>
                        </div>)
                })}
                </div>
                <small>Copyright &copy; <strong>YusyAndrés</strong>  </small>
            <p>y.pezoa22@gmail.com - +56 944340236</p> 
        </div>);
}

export default Footer;