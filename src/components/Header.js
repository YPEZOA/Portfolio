import React from 'react';
import Button from './Button';
import data from '../constants/data';



const Header = () => {
        return(
            <div className="header__main">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="navbar-brand"><a href="#">iconHere</a></div>
                    <div className="navbar-nav">
                        { data.buttons.map((data, key) => {
                            const { title, url } = data;
                            return (
                                <Button title= {title}
                                        url={url}
                                        key={key}
                                />
                            )
                        })}
                    </div>
                </nav>  
            </div>
        )
}

export default Header;