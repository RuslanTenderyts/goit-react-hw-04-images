import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow} from "./Modal.styled";


const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children}) => {
  
  useEffect(() => {

    const handleKeyDown = (e) => {
      if(e.code === 'Escape' ){
          onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  })

  const handleBackdropClick = (e) => {
    if(e.currentTarget === e.target) {
        onClose();
    }
  };
    
  return createPortal(
    
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow >
        {children}
      </ModalWindow>
    </Overlay>,

    modalRoot
  ); 
};


PropTypes.Modal = {
  onClose: PropTypes.func.isRequired, 
};






       


