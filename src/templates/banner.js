import React from "react";
import "./banner.css";

const Banner = () => {
    return (
        <div className={"banner_area"}>
            <a href={"/"}>
                <div className={"banner"}>
                    <div className={"banner_title"}>
                        <span>여러분의 블로그를 등록해주세요</span>
                    </div>
                    <div className={"banner_icon"}>
                        <img src={"/pray.png"} alt={"please register your blog"}/>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default Banner;