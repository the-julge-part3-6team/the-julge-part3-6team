import React from 'react';
import * as S from './notificationModal.styled';
import { useModal } from '@/shared/store/useModal';

const NotificationModal = () => {
  const { isOpen, setIsClose } = useModal();

  return (
    <>
      {isOpen && (
        <S.ModalAround onClick={setIsClose}>
          <S.ModalLayout onClick={e => e.stopPropagation()}></S.ModalLayout>
        </S.ModalAround>
      )}
    </>
  );
};

export default NotificationModal;
