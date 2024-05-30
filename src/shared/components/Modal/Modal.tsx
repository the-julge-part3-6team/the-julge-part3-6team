import React from 'react';
import * as S from './modal.styled';
import Image from 'next/image';
import CustomButton from '../Button/CustomButton/CustomButton';
import RedButton from '../Button/RedButton/RedButton';
import { useModal } from '@/shared/store/useModal';

interface Props {
  modalHeader: React.ReactNode;
  modalFooter: React.ReactNode;
}

const Modal = ({ modalHeader, modalFooter }: Props) => {
  const { isOpen, setIsClose } = useModal();

  return (
    <>
      {isOpen && (
        <S.ModalAround onClick={setIsClose}>
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
