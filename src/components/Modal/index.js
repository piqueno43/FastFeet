import React from 'react';

import { ContainerModal, ContentModal, CloseModal } from './styles';

const Modal = ({ children, visible, handleClickModal }) => {
  return (
    <ContainerModal visible={visible}>
      <ContentModal>
        <CloseModal onClick={handleClickModal}>&times;</CloseModal>
        {children}
      </ContentModal>
    </ContainerModal>
  );
};

export default Modal;
