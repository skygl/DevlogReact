import React from "react";

const ImageWithText = ({imageInfo, text, onClick}) => {
    return (
        <div className={"image_text_container"} onClick={onClick}>
            <div>
                <img className={"title_image"} src={imageInfo.src} alt={imageInfo.alt}/>
            </div>
            <div>
                <span>
                    &nbsp;
                    {text}
                </span>
            </div>
        </div>
    )
};

export default ImageWithText;