import {useEffect} from "react";
import axios from 'axios';
import moment from "moment";
import AlertImage from "../public/alert.svg";
import LogoImage from "../public/devlog.png";

const API_SERVER_HOST = process.env.REACT_APP_API_SERVER_HOST;

export function usePostList(date, page, offset, setCards, setHasMorePosts) {
    useEffect(() => {
        const postDate = moment(`${date.year}-${date.month}-${date.day}`).subtract(1, 'days').format("YYYY-MM-DD");
        axios({
            method: 'GET',
            url: `https://${API_SERVER_HOST}/posts`,
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
            if (page === 0) {
                setCards([...res.data]);
            } else {
                setCards(cards => [...cards, ...res.data]);
            }
            setHasMorePosts(() => (page + 1) * offset < res.headers["x-total-count"]);
        })
    }, [date, page, offset, setCards, setHasMorePosts]);
}

const regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
const urlValidator = new RegExp(regexQuery, "i");

const parseImage = (html) => {
    let element;
    if (!!(element = html.querySelector("meta[property='og:image']"))) {
        return element.getAttribute("content");
    }
    return LogoImage;
};

const parseTitle = (html) => {
    let element;
    if (!!(element = html.querySelector("meta[property='og:title']"))
        || !!(element = html.querySelector("meta[name='title']"))) {
        return element.getAttribute("content");
    } else if (!!(element = html.querySelector("head > title"))) {
        return element.innerHTML;
    } else {
        return "";
    }
};

const parseDescription = (html) => {
    let element;
    if (!!(element = html.querySelector("meta[property='og:description']"))
        || !!(element = html.querySelector("meta[name='description']"))) {
        return element.getAttribute("content");
    } else if (!!(element = html.querySelector("head > description"))) {
        return element.innerHTML;
    } else {
        return "";
    }
};

export function useProxy(url, setOg) {
    useEffect(() => {
        if (urlValidator.test(url)) {
            axios({
                method: 'GET',
                url: `https://${API_SERVER_HOST}/proxy`,
                params: {
                    url: url
                }
            })
                .then(res => {
                    if (res.data.status === 200) {
                        const html = document.createElement('html');
                        html.innerHTML = res.data.html;
                        const image = parseImage(html);
                        const title = parseTitle(html);
                        const description = parseDescription(html);
                        setOg({
                            url, title, description, image
                        })
                    } else {
                        const title = res.data.status < 500 ? "올바른 URL을 입력해주세요" : "문제가 발생했습니다.";
                        setOg({
                            url,
                            title: title,
                            description: "",
                            image: AlertImage
                        })
                    }
                })
                .catch(() => {
                    setOg({
                        url,
                        title: "서버에 문제가 발생했습니다.",
                        description: "",
                        image: AlertImage
                    })
                })
        } else if (url === "") {
            setOg({
                url,
                title: "URL을 입력해주세요",
                description: "",
                image: LogoImage
            })
        } else {
            setOg({
                url,
                title: "올바른 URL을 입력해주세요",
                description: "",
                image: AlertImage
            })
        }
    }, [url, setOg]);
}

export function useCheckDuplicatedUrl(url, setIsDuplicated, setWarnMessage) {
    useEffect(() => {
        if (urlValidator.test(url)) {
            axios({
                method: 'GET',
                url: `https://${API_SERVER_HOST}/api/blogs/check`,
                params: {
                    url: url
                }
            })
                .then(res => {
                    if (res.data.type === 'blog') {
                        setWarnMessage('이미 블로그가 등록되어 있습니다')
                    } else if (res.data.type === 'blogreq') {
                        setWarnMessage('등록 대기 중인 블로그입니다')
                    } else {
                        setWarnMessage('');
                    }
                    setIsDuplicated(res.data.exists);
                })
                .catch(() => {
                    setIsDuplicated(false);
                })
        } else {
            setIsDuplicated(false);
        }
    }, [setWarnMessage, setIsDuplicated, url])
}

export function postRegisterForm(url, setModal) {
    const modal = {};
    modal.show = true;
    if (urlValidator.test(url)) {
        axios({
            method: 'POST',
            url: `https://${API_SERVER_HOST}/api/blogreqs`,
            data: {
                url: url
            }
        })
            .then(res => {
                modal.message = '등록되었습니다';
                modal.success = true;
                setModal(modal);
            })
            .catch(err => {
                modal.success = false;
                if (err.response.status === 409) {
                    if (err.response.data.type === 'blog') {
                        modal.message = '이미 등록된 블로그입니다';
                    } else if (err.response.data.type === 'blogreq') {
                        modal.message = '등록 대기중인 블로그입니다';
                    } else {
                        modal.message = '문제가 발생했습니다';
                    }
                } else if (err.response.status === 500) {
                    modal.message = '문제가 발생했습니다';
                }
                setModal(modal);
            })
    } else {
        modal.success = false;
        modal.message = '입력하신 URL은 올바른 포맷이 아닙니다';
        setModal(modal);
    }
}