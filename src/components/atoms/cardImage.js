import React from "react";
import "./card.css";

const CardImage = ({image_url}) => {
    return (
        <div className={"card_image_area"}>
            <img className={"card_image"} src={image_url} alt={"blog"}/>
        </div>
    )
};

export default CardImage;