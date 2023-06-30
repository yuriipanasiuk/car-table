import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import * as Styled from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClick }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown({ code }) {
    if (code === 'Escape') {
      onClick();
    }
  }

  return createPortal(
    <Styled.Backdrop>
      <Styled.StyledModal>{children}</Styled.StyledModal>
    </Styled.Backdrop>,
    modalRoot
  );
};

export default Modal;
