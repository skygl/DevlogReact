import React from "react";
import "../../styles/css/card.css";

const CardImage = ({image_url}) => {
    const defaultImageUrl = "/devlog.png";

    return (
        <div className={"card_image_area"}>
            <img className={"card_image"} src={image_url ? image_url : defaultImageUrl} alt={"blog"}/>
        </div>
    )
};

export default CardImage;