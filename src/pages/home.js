import React, {useState} from 'react';
import Header from "../templates/header";
import Banner from "../templates/banner";
import '../styles/css/App.css';
import DatePicker from "../templates/datePicker";
import Cards from "../templates/cards";
import moment from "moment";
import Buttons from "../templates/buttons";
import {usePostList} from "../useApi";

function Home() {
    const [posts, setPosts] = useState([]);

    const [page, setPage] = useState(0);
    const offset = 20;

    const [year, month, day] = moment().format("YYYY-MM-DD").split("-");
    const [date, setDate] = useState({year, month, day});

    const [hasMorePosts, setHasMorePosts] = useState(false);

    usePostList(date, page, offset, setPosts, setHasMorePosts);

    function loadPosts() {
        setPage(page + 1);
    }

    const changeDate = ({year, month, day}) => {
        setDate({year, month, day});
        setPage(0);
        setPosts([]);
    };

    return (
        <div className={"home"}>
            <Header/>
            <Banner/>
            <div className={"content_area home_content_area"}>
                <DatePicker date={date} changeDate={changeDate}/>
                <div className={"cards_area"}>
                    <Cards cards={posts} onLoadPosts={loadPosts} hasMorePosts={hasMorePosts} page={page}/>
                </div>
            </div>
            <Buttons/>
        </div>
    );
}

export default Home;
