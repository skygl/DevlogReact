import React from "react";
import "../../styles/css/card.css";
import Logo from "../../../public/devlog.png";

const CardImage = ({image_url}) => {
    return (
        <div className={"card_image_area"}>
            <img className={"card_image"} src={image_url ? image_url : Logo} alt={"blog"}/>
        </div>
    )
};

export default CardImage;