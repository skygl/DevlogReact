import React from "react";
import "../../styles/css/card.css";
import CardImage from "../atoms/cardImage";
import CardDescription from "../atoms/cardDescription";

const Card = ({card}) => {
    const {title, tags, imageUrl, description, url} = card;

    return (
        <div className={"card"}>
            <a href={url} target={"_blank"}>
                <CardImage image_url={imageUrl}/>
                <CardDescription title={title} tagNames={tags} description={description}/>
            </a>
        </div>
    )
};

export default Card;