import React from 'react';
import '../styles/css/modal.css';

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
                    <button onClick={() => setModal(false)}>확인</button>
                </div>
            </div>
        </>
    )
};

export default Modal;