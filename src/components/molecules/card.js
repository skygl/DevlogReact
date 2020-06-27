import React from "react";
import "../../styles/css/card.css";
import CardImage from "../atoms/cardImage";
import CardDescription from "../atoms/cardDescription";

const Card = ({card}) => {
    const {title, tagNames, imageUrl} = card;

    return (
        <div className={"card"}>
            <CardImage image_url={imageUrl}/>
            <CardDescription title={title} tagNames={tagNames}/>
        </div>
    )
};

export default Card;