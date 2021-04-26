import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'components/atoms/Button/Button';

import { ModalWrapper, ModalBackground } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalWrapper>
        {children} <Button onClick={handleClose}>Close Modal</Button>
      </ModalWrapper>
    </ModalBackground>,
    modalNode
  );
};

export default Modal;
