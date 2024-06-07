import React from 'react';
import * as S from './Modal.styled';
import { useModal } from '@/shared/store/useModal';

interface Props {
  modalHeader: React.ReactNode;
  modalFooter: React.ReactNode;
  modalKey: string;
}

const Modal = ({ modalHeader, modalFooter, modalKey }: Props) => {
  const { isOpen, key } = useModal();
  const isSelected = key === modalKey;

  return (
    <>
      {isOpen && isSelected && (
        <S.ModalAround>
          <S.ModalLayout>
            <S.ModalHeader>{modalHeader}</S.ModalHeader>
            <S.ModalFooter>{modalFooter}</S.ModalFooter>
          </S.ModalLayout>
        </S.ModalAround>
      )}
    </>
  );
};

export default Modal;
