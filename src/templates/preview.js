import React, {useState} from "react";
import {useProxy} from "../useApi";

const Preview = ({url}) => {

    const [og, setOg] = useState({
        url: "",
        title: "",
        description: "",
        image: ""
    });

    useProxy(url, setOg);

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