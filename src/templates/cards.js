import React from "react";
import Card from "../components/molecules/card";
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';

const masonryOptions = {
    transitionDuration: 0,
    gutter: 20,
};

const Cards = ({cards, onLoadCards, page}) => {

    const generateCards = (cards) => {
        return cards.map(card => {
            return (
                <Card card={card} key={card.id}/>
            )
        });
    };

    return (
        <div>
            <InfiniteScroll
                pageStart={0}
                loadMore={onLoadCards}
                hasMore={true}
                loader={
                    <div className="loading-container" key={page}>
                        <div className="loading"/>
                        <div id="loading-text">loading</div>
                    </div>
                }
                threshold={200}>
                <Masonry className={"masonry_view"} options={masonryOptions}>
                    {generateCards(cards)}
                </Masonry>
            </InfiniteScroll>
        </div>
    )
};

export default Cards;