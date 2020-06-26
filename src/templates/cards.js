import React from "react";
import Card from "../components/molecules/card";

const Cards = ({cards}) => {

    const generateCards = (cards) => {
        return cards.map(card => {
            return (
                <Card card={card} key={card.id}/>
            )
        });
    };

    return (
        <div>
            {generateCards(cards)}
        </div>
    )
};

export default Cards;