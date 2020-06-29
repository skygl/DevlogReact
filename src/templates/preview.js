import React, {useEffect, useState} from "react";
import axios from "axios";

const proxyPrefix = "https://cors-anywhere.herokuapp.com/";
const regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
const urlValidator = new RegExp(regexQuery, "i");

const parseImage = (html) => {
    let element;
    if (!!(element = html.querySelector("meta[property='og:image']"))) {
        return element.getAttribute("content");
    }
    return "/devlog.png";
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

const Preview = ({url}) => {

    const [og, setOg] = useState({
        url: "",
        title: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        if (urlValidator.test(url)) {
            axios.get(proxyPrefix + url)
                .then(res => {
                    const html = document.createElement('html');
                    html.innerHTML = res.data;
                    const image = parseImage(html);
                    const title = parseTitle(html);
                    const description = parseDescription(html);
                    setOg({
                        url, title, description, image
                    })
                })
                .catch(() => {
                    setOg({
                        url,
                        title: "올바른 URL을 입력해주세요",
                        description: "",
                        image: "/alert.svg"
                    })
                })
        } else if (url === "") {
            setOg({
                url,
                title: "URL을 입력해주세요",
                description: "",
                image: "/devlog.png"
            })
        } else {
            setOg({
                url,
                title: "올바른 URL을 입력해주세요",
                description: "",
                image: "/alert.svg"
            })
        }
    }, [url]);

    const onClick = () => {
        window.open(og.url, '_blank');
    };

    return (
        <div className={"preview_container"} onClick={onClick}>
            <div className={"preview_img"}>
                <img src={og.image} alt={"preview blog"}/>
            </div>
            <div className={"preview_desc_box"}>
                <div className={"preview_title"}>
                    {og.title}
                </div>
                <div className={"preview_desc"}>
                    {og.description}
                </div>
                <div className={"preview_url"}>{og.url}</div>
            </div>
        </div>
    )
};

export default Preview;