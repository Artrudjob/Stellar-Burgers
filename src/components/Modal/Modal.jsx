import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styleModal from './modal.module.css';

const modalsContainer = document.querySelector('#modals');

function Modal({ closeModals, onOverlayClick /*onEscKeydown*/, children }) {
    function handleEscKeydown(e) {
        if (e.key === 'Escape') {
            closeModals()
        }
    }


    React.useEffect(() => {
        document.addEventListener('keydown', /*onEscKeydown*/handleEscKeydown)

        return () => {
            document.removeEventListener('keydown', /*onEscKeydown*/handleEscKeydown)
        }
    }, [])

    return ReactDOM.createPortal(
        <>
            <div className={styleModal.popup} >
                {children}
            </div>
            <ModalOverlay onClick={onOverlayClick} />
        </>,
        modalsContainer
    )
}

export default Modal;