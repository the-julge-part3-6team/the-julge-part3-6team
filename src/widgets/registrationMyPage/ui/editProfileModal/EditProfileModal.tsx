import RedButton from '@/shared/components/Button/RedButton/RedButton';
import Modal from '@/shared/components/Modal/Modal';
import { useModal } from '@/shared/store/useModal';
import { useRouter } from 'next/router';
import React from 'react';

export const EditProfileModal = () => {
  const router = useRouter();
  const { setIsClose } = useModal();

  return (
    <Modal
      modalKey="등록완료"
      modalHeader={
        <>
          <p>등록이 완료 되었습니다.</p>
        </>
      }
      modalFooter={
        <>
          <div style={{ width: '80px' }}>
            <RedButton
              onClick={() => {
                router.push('/mypage');
                setIsClose();
              }}
              text="확인"
            />
          </div>
        </>
      }
    />
  );
};
