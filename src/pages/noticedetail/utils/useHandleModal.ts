import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import { useUserData } from '@/shared/store/useUserData';
import { useState } from 'react';

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
  const userData = useUserData(); 

  const applyClick = () => {
    if (!userData?.phone) {
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
