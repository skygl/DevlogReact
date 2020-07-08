import React from 'react';
import '../styles/css/modal.css';
import {Link} from "react-router-dom";

const Modal = ({content, success, setModal}) => {
    const buttonClassName = `button-wrap ${success ? 'modal-success' : 'modal-fail'}`;
    return (
        <>
            <div className="Modal-overlay"/>
            <div className="Modal">
                <div className="content">
                    <p>
                        {content}
                    </p>
                </div>
                <div className={buttonClassName}>
                    <Link to={"/"}>
                        <button onClick={() => setModal(false)}>확인</button>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Modal;