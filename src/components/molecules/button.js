import React from "react";
import "../../styles/css/button.css";
import ButtonImage from "../atoms/buttonImage";

const Button = ({id, className, imageInfo, onClick}) => {
    return(
        <div id={id} className={className + " button"} onClick={onClick}>
            <ButtonImage src={imageInfo.src} alt={imageInfo.alt}/>
        </div>
    )
};

export default Button;