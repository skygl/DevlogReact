import React from "react";

const CardDescription = ({title, tagNames}) => {
    const generateTags = (tagNames) => {
        return tagNames.map((tagName, i) => {
            return (
                <div className={"tag"} key={i}>
                    <span>{tagName}</span>
                </div>
            )
        });
    };

    return (
        <div className={"card_description_area"}>
            <div className={"title"}>
                <h3>{title}</h3>
            </div>
            <div className={"tags"}>
                {generateTags(tagNames)}
            </div>
        </div>
    )
};

export default CardDescription;