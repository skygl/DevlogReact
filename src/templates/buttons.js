/*global Kakao */
import React from "react";
import Button from "../components/molecules/button";
import "../components/molecules/button.css";

const Buttons = () => {
    const questionImageInfo = {
        src: "/question.svg",
        alt: "question"
    };

    const addKakaoChannel = () => {
        Kakao.Channel.addChannel({
            channelPublicId: '_MvtSxb'
        });
    };

    return (
        <div >
            <Button id={"question"} className={"question"} imageInfo={questionImageInfo} onClick={addKakaoChannel}/>
        </div>
    )
};

export default Buttons;