import React from "react";
import "../molecules/button.css";

const ButtonImage = ({src, alt}) => {
    return (
        <img className={"button_img"} src={src} alt={alt}/>
    )
};

export default ButtonImage;