import React from 'react';
import * as S from './notificationModal.styled';
import { useModal } from '@/shared/store/useModal';

interface Props {
  title: string;
  content: string;
}

const NotificationModal: React.FC<Props> = ({ title, content }) => {
  const { isOpen, setIsClose } = useModal();

  return (
    <>
      {isOpen && (
        <S.ModalAround onClick={setIsClose}>
          <S.ModalLayout onClick={e => e.stopPropagation()}>
            <h2>{title}</h2>
            <p>{content}</p>
            <S.CloseButton onClick={setIsClose}>Close</S.CloseButton>
          </S.ModalLayout>
        </S.ModalAround>
      )}
    </>
  );
};

export default NotificationModal;
