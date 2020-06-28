import React from "react";
import "../../styles/css/button.css";

const ButtonImage = ({src, alt}) => {
    return (
        <img className={"button_img"} src={src} alt={alt}/>
    )
};

export default ButtonImage;