import React from "react";
import styleModalOverlay from './ModalOverlay.module.css'

function ModalOverlay(props) {

    return (
        <div className={styleModalOverlay.modalOverlay} onClick={props.onClick}></div>
    )
}

export default ModalOverlay;