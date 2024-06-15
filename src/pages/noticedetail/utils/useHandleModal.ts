// useHandleModal.ts
import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import { useUserData } from '@/shared/store/useUserData';
import { useState } from 'react';

// 타입 정의
export type HandleModalType = {
  applyClick: () => void;
  cancelClick: () => void;
  confirmCancel: () => void;
  closeCancelModal: () => void;
  confirm: () => void;
};

interface HandleModalProps {
  setIsApplied: (value: boolean) => void;
}

export const useHandleModal = ({
  setIsApplied,
}: HandleModalProps): HandleModalType => {
  const router = useRouter();
  const { setIsOpen, setIsClose, key } = useModal();
  const userData = useUserData(); // 이곳에서 유저 데이터를 사용한다고 가정

  const applyClick = () => {
    if (!userData?.phone) {
      // 예시로 userData의 phone 필드가 없으면 profileAlert를 엽니다
      setIsOpen('profileAlert');
    } else {
      setIsOpen('applySuccess');
      setIsApplied(true);
    }
  };

  const cancelClick = () => setIsOpen('cancelModal');

  const confirmCancel = () => {
    setIsApplied(false);
    setIsClose();
  };

  const closeCancelModal = () => setIsClose();

  const confirm = () => {
    setIsClose();
    if (key === 'profileAlert') {
      router.push('/mypage');
    }
  };

  return {
    applyClick,
    cancelClick,
    confirmCancel,
    closeCancelModal,
    confirm,
  };
};
