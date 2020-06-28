import React from "react";
import "./button.css";
import ButtonImage from "../atoms/buttonImage";

const Button = ({id, className, imageInfo, onClick}) => {
    return(
        <button id={id} className={className + " button"} onClick={onClick}>
            <ButtonImage src={imageInfo.src} alt={imageInfo.alt}/>
        </button>
    )
};

export default Button;