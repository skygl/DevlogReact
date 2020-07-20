import React from "react";
import Card from "../components/molecules/card";
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';

const masonryOptions = {
    transitionDuration: 0,
    gutter: 20,
};

const Cards = ({cards, onLoadPosts, page, hasMorePosts}) => {

    const generateCards = (cards) => {
        return cards.map((card, index) => {
            return (
                <React.Fragment key={index}>
                    <Card card={card}/>
                </React.Fragment>
            )
        });
    };

    return (
        <div>
            <InfiniteScroll
                pageStart={0}
                loadMore={onLoadPosts}
                hasMore={hasMorePosts}
                initialLoad={false}
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