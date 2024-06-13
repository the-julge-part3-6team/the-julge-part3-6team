import * as S from './NotificationModal.styled';
import NotificationItem from './NotificationItem/NotificationItem';
import { useModal } from '@/shared/store/useModal';
import { Notifications } from '@/shared/types/notification';

interface Props {
  modalContents: Notifications[];
  modalKey: string;
}

export const NotificationModal = ({ modalContents, modalKey }: Props) => {
  const { isOpen, key } = useModal();
  const isSelected = key === modalKey;

  return (
    <>
      {isOpen && isSelected && (
        <S.NotificationModalContainer>
          <S.NotificationModalHeader>
            알림 {modalContents.length}개
          </S.NotificationModalHeader>
          {modalContents.map(modalContent => (
            <NotificationItem key={modalContent.id} {...modalContent} />
          ))}
        </S.NotificationModalContainer>
      )}
    </>
  );
};
