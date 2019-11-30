import React from 'react';


const Button = (props) => {
        return(
            <div className="container__buttons">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="navbar-brand"><a href="#">iconHere</a></div>
                    <div className="navbar-nav">
                        {props.map((name, key) => {
                            
                        })}
                    </div>
                </nav>  
            </div>
        )
}

export default Button;
