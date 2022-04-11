import React from "react";
import propTypes from 'prop-types';
import styleModalOverlay from './modalOverlay.module.css'

function ModalOverlay({ onClick }) {
    return (
        <div className={styleModalOverlay.modalOverlay} onClick={onClick}></div>
    )
}

ModalOverlay.propTypes = {
    onClick: propTypes.func
}

export default ModalOverlay;