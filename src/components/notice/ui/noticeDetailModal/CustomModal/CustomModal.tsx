import React from 'react';
import * as S from './CustomModal.styled';
import { useModal } from '@/shared/store/useModal';

interface Props {
  modalHeader: React.ReactNode;
  modalFooter: React.ReactNode;
  modalKey: string;
}

const CustomModal = ({ modalHeader, modalFooter, modalKey }: Props) => {
  const { isOpen, key } = useModal();
  const isSelected = key === modalKey;

  return (
    <>
      {isOpen && isSelected && (
        <S.CustomModalAround>
          <S.CustomModalLayout>
            <S.CustomModalHeader>{modalHeader}</S.CustomModalHeader>
            <S.CustomModalFooter>{modalFooter}</S.CustomModalFooter>
          </S.CustomModalLayout>
        </S.CustomModalAround>
      )}
    </>
  );
};

export default CustomModal;
