import React from "react";
import "../styles/css/banner.css";
import {Link} from "react-router-dom";
import PrayImage from "../../public/pray.png";

const Banner = () => {
    return (
        <div className={"banner_area"}>
            <Link to={"/register"}>
                <div className={"banner_a_block"}>
                    <div className={"banner"}>
                        <div className={"banner_title"}>
                            <span>여러분의 블로그를 등록해주세요</span>
                        </div>
                        <div className={"banner_icon"}>
                            <img src={PrayImage} alt={"please register your blog"}/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Banner;