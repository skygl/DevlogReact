import React from "react";
import "../../styles/css/card.css";
import CardImage from "../atoms/cardImage";
import CardDescription from "../atoms/cardDescription";

const Card = ({card}) => {
    const {title, tags, imageUrl, description} = card;

    return (
        <div className={"card"}>
            <CardImage image_url={imageUrl}/>
            <CardDescription title={title} tagNames={tags} description={description}/>
        </div>
    )
};

export default Card;