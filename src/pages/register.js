import React, {useRef, useState} from "react";
import Header from "../templates/header";
import "../styles/css/App.css";
import "../styles/css/register.css";
import ImageWithText from "../components/molecules/imageWithText";
import {Link} from "react-router-dom";
import debounce from "lodash.debounce";
import Preview from "../templates/preview";
import {postRegisterForm, useCheckDuplicatedUrl} from "../useApi";
import Modal from "../templates/modal";

const Register = () => {
    const [fullUrl, setFullUrl] = useState({
        prefix: "",
        url: "",
        suffix: ""
    });

    const backImageInfo = {
        src: "/undo.svg",
        alt: "back to home"
    };

    const prefix = useRef();
    const suffix = useRef();
    const url = useRef();

    const setPrefixAndSuffix = (prefixFormat, suffixFormat) => {
        if (prefixFormat === "" && suffixFormat === "") {
            url.current.style.width = "200px";
        } else {
            url.current.style.width = "110px";
        }
        prefix.current.innerHTML = prefixFormat;
        suffix.current.innerHTML = suffixFormat;
        setFullUrl({
            ...fullUrl,
            prefix: prefixFormat,
            suffix: suffixFormat
        });
    };

    const setUrl = ((url) => {
        setFullUrl({
            ...fullUrl,
            url: url
        });
    });

    const updateUrl = (url) => {
        setUrl(url);
    };

    const [warnMessage, setWarnMessage] = useState('');

    const delayUpdateUrl = debounce(updateUrl, 500);

    const convertPrefixAndSuffix = (platform) => {
        switch (platform) {
            case "tistory":
                return setPrefixAndSuffix("https://", ".tistory.com");
            case "velog":
                return setPrefixAndSuffix("https://velog.io/@", "");
            case "brunch":
                return setPrefixAndSuffix("https://brunch.co.kr/@", "");
            case "medium":
                return setPrefixAndSuffix("https://medium.com/@", "");
            case "github":
                return setPrefixAndSuffix("https://", ".github.io/");
            default:
                return setPrefixAndSuffix("", "");
        }
    };

    const [isDuplicated, setIsDuplicated] = useState(false);

    useCheckDuplicatedUrl([fullUrl.prefix, fullUrl.url, fullUrl.suffix].join(""), setIsDuplicated, setWarnMessage);

    const [modal, setModal] = useState({
        show: false,
        success: false,
        message: ''
    });

    const onSubmit = function (event) {
        postRegisterForm([fullUrl.prefix, fullUrl.url, fullUrl.suffix].join(""), setModal);
        event.preventDefault();
    };

    return (
        <>
            <div className={"register_home"}>
                <Header/>
                <div className={"register_content_area"}>
                    <div className={"register_title_container"}>
                        <div className={"back_home"}>
                            <Link style={{textDecoration: "none"}} to={"/"}>
                                <ImageWithText imageInfo={backImageInfo} text={"돌아가기"}/>
                            </Link>
                        </div>
                        <div className={"register_title"}>
                            블로그 등록
                        </div>
                    </div>
                    <div className={"register_content_container"}>
                        <div className={"register_form_wrapper"}>
                            <form action={"#"} onSubmit={onSubmit}>
                                <div>
                                    <div className={"register_form_row"}>
                                        <label htmlFor={"register_platform"}>플랫폼</label>
                                        <select id={"register_platform"} title={"platform"} name={"platform"}
                                                onChange={(e) => {
                                                    convertPrefixAndSuffix(e.target.value);
                                                }}>
                                            <option value={"self"}>직접 입력</option>
                                            <option value={"tistory"}>tistory</option>
                                            <option value={"velog"}>velog</option>
                                            <option value={"brunch"}>brunch</option>
                                            <option value={"medium"}>medium</option>
                                            <option value={"github"}>github</option>
                                        </select>
                                    </div>
                                    <div className={"register_form_row"}>
                                        <label htmlFor={"register_url"}>URL</label>
                                        <div className={"register_url_wrapper"}>
                                            <p className={"register_url_prefix"} ref={prefix}/>
                                            <input className={(isDuplicated ? 'input_alert' : '')} id={"register_url"}
                                                   type={"text"}
                                                   ref={url} onChange={e => {
                                                delayUpdateUrl(e.target.value);
                                            }}/>
                                            <p className={"register_url_suffix"} ref={suffix}/>
                                        </div>
                                        <div className={"duplicated_url_box"}>
                                            {isDuplicated && <span>{warnMessage}</span>}
                                        </div>
                                    </div>
                                    <Preview url={[fullUrl.prefix, fullUrl.url, fullUrl.suffix].join("")}/>
                                </div>
                                <div>
                                    <input className={"register_btn"} type={"submit"} value={"등록"}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {modal.show && <Modal content={modal.message} success={modal.success} setModal={setModal}/>}
        </>
    )
};

export default Register;