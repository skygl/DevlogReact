import {useEffect} from "react";
import axios from 'axios';
import './config';

const API_SERVER_HOST = process.env.REACT_APP_API_SERVER_HOST;
const API_SERVER_PORT = process.env.REACT_APP_API_SERVER_PORT;

export function usePostList(date, page, offset, setCards, setHasMorePosts) {
    useEffect(() => {
        const postDate = [date.year, date.month, parseInt(date.day) - 1].join("-");
        axios({
            method: 'GET',
            url: `http://${API_SERVER_HOST}:${API_SERVER_PORT}/posts`,
            params: {
                _sort: 'score',
                _order: 'DESC',
                score: '5..10',
                start_date: postDate,
                end_date: postDate,
                _start: page * offset,
                _end: (page + 1) * offset
            }
        }).then(res => {
            setCards(cards => [...cards, ...res.data]);
            setHasMorePosts((page + 1) * offset < res.headers["X-Total-Count"]);
        })
    }, [date, page, offset, setCards, setHasMorePosts]);
}