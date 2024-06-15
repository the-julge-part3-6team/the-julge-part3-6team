import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import { useEffect, useState } from 'react';
import { MYPAGE } from '@/constant/path';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export type HandleModalType = {
  applyClick: () => void;
  cancelClick: () => void;
  confirmCancel: () => void;
  closeCancelModal: () => void;
  confirm: () => void;
};

interface HandleModalProps {
  mutate: any;
  setIsApplied: (value: boolean) => void;
}

export const useHandleModal = ({
  mutate,
  setIsApplied,
}: HandleModalProps): HandleModalType => {
  const router = useRouter();
  const { setIsOpen, setIsClose, key } = useModal();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // localStorage에 접근하기 전에 브라우저 환경인지 확인
  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const applyClick = () => {
    if (!isAuthenticated) {
      setIsOpen('profileAlert');
    } else {
      mutate();
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
