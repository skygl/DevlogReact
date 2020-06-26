import React from "react";
import Card from "../components/molecules/card";
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0,
    gutter: 20,
};

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
            <Masonry className={"masonry_view"} options={masonryOptions}>
                {generateCards(cards)}
            </Masonry>
        </div>
    )
};

export default Cards;