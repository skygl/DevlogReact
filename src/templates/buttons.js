/*global Kakao */
import React, {useState} from "react";
import Button from "../components/molecules/button";
import "../styles/css/button.css";
import {toFit} from "../scroll";

const Buttons = () => {
    const innerHeight = window.innerHeight;
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [active, setActive] = useState(false);

    const topImageInfo = {
        src: "/top.svg",
        alt: "link to top"
    };

    const questionImageInfo = {
        src: "/question.svg",
        alt: "question"
    };

    const onScroll = () => {
        setScrollY(window.scrollY);
        setActive(true);
    };

    const triggerCondition = () => {
        const prev = scrollY;
        const next = window.scrollY;
        setScrollY(next);
        if (next > 1.2 * innerHeight && prev > next) {
            return true;
        }
        setActive(false);
        return false;
    };

    window.addEventListener('scroll', toFit(onScroll, {triggerCondition}), {passive: true});

    const linkToTop = () => {
        window.scroll({
            behavior: 'smooth',
            top: 0,
            left: 0,
        });
    };

    const addKakaoChannel = () => {
        Kakao.Channel.chat({
            channelPublicId: '_MvtSxb'
        });
    };

    return (
        <div>
            {active && <Button className={"top"} imageInfo={topImageInfo} onClick={linkToTop}/>}
            <Button id={"question"} className={"question"} imageInfo={questionImageInfo} onClick={addKakaoChannel}/>
        </div>
    )
};

export default Buttons;