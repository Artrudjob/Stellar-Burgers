import React from "react";
import styleModalOverlay from './modalOverlay.module.css'

function ModalOverlay({ onClick }) {

    return (
        <div className={styleModalOverlay.modalOverlay} onClick={onClick}></div>
    )
}

export default ModalOverlay;