import React from 'react';
import './logo.css';

const Logo = () => {
    return (
        <div className={"logo_area"}>
            <a href="/">
                <img src={"/devlog.png"} alt={"logo"} className={"logo"}/>
            </a>
        </div>
    )
};

export default Logo;