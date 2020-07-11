import React from 'react';
import '../../styles/css/logo.css';
import LogoImage from "../../../public/devlog.png";

const Logo = () => {
    return (
        <div className={"logo_area"}>
            <a href="/">
                <img src={LogoImage} alt={"logo"} className={"logo"}/>
            </a>
        </div>
    )
};

export default Logo;