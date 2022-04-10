import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styleModal from './modal.module.css';

const modalsContainer = document.querySelector('#modals');

function Modal({ onOverlayClick, onEscKeydown, children }) {
    React.useEffect(() => {
        document.addEventListener('keydown', onEscKeydown)

        return () => {
            document.removeEventListener('keydown', onEscKeydown)
        }
    }, [])

    return ReactDOM.createPortal(
        <>
            <div className={styleModal.popup}>
                {children}
            </div>
            <ModalOverlay onClick={onOverlayClick} />
        </>,
        modalsContainer
    )
}

export default Modal;