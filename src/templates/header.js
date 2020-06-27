import React from "react";
import Logo from '../components/atoms/logo';
import '../styles/css/header.css';

const Header = () => {
    return (
        <div className={"header_area"}>
            <Logo />
        </div>
    )
};

export default Header;