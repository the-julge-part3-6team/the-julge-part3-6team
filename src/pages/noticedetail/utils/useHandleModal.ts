import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import { useUserData } from '@/shared/store/useUserData';
import { useState } from 'react';
import { UseQueryResult } from 'react-query';
import { MYPAGE } from '@/constant/path';

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
  // const userData = useUserData(); 

  // 토큰으로 로그인 여부 확인
  const isAuthenticated = !!localStorage.getItem('accessToken');

  const applyClick = () => {
    if (!isAuthenticated) {
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
      router.push(MYPAGE.INDEX);
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
