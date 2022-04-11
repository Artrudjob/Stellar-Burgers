import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styleModal from './modal.module.css';
import ingredientsDetailsStyle from "../IngredientDetails/ingredientsDetails.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const modalsContainer = document.querySelector('#modals');

function Modal({ closeModals, onOverlayClick, title, children }) {
    function handleEscKeydown(e) {
        if (e.key === 'Escape') {
            closeModals()
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handleEscKeydown)

        return () => {
            document.removeEventListener('keydown', handleEscKeydown)
        }
    })

    return ReactDOM.createPortal(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", top: 0, left: 0, width: '100%', height: '100%'}}>
            <div className={styleModal.popup} >
                <div className={ingredientsDetailsStyle.ingredientsDetails__boxBtn}>
                    <CloseIcon type={"primary"} onClick={onOverlayClick}/>
                </div>
                {title}
                {children}
            </div>
            <ModalOverlay onClick={onOverlayClick}></ModalOverlay>
        </div>,
        modalsContainer
    )
}

Modal.propTypes = {
    closeModals: PropTypes.func,
    onOverlayClick: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.object
}

export default Modal;