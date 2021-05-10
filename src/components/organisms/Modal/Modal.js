import React from 'react';
//components
import { Button } from 'components/atoms/Button/Button';
//styles
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('modal-container')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children} <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  );
};

export default Modal;
