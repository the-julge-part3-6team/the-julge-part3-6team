import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import { useState } from 'react';
import { UseQueryResult } from 'react-query';

interface HandleModalProps {
  userData: UseQueryResult<any, unknown>;
  setIsApplied: (value: boolean) => void;
}

export const useHandleModal = ({
  userData,
  setIsApplied,
}: HandleModalProps) => {
  const router = useRouter();
  const { setIsOpen, setIsClose, key } = useModal();

  const applyClick = () => {
    if (!userData?.data.item.phone) {
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
