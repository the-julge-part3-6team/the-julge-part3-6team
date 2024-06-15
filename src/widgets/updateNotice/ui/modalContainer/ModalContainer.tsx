import { MYSTORE } from '@/constant/path';
import * as S from './ModalContainer.styled';
import PrimaryButton from '@/shared/components/Button/RedButton/RedButton';
import Modal from '@/shared/components/Modal/Modal';
import { useModal } from '@/shared/store/useModal';
import { useRouter } from 'next/router';

export const ModalContainer = () => {
  const router = useRouter();
  const { setIsClose } = useModal();

  return (
    <Modal
      modalKey="공고 수정 모달"
      modalHeader={<S.ModalHeader>수정이 완료되었습니다.</S.ModalHeader>}
      modalFooter={
        <S.ModalFooter>
          <PrimaryButton
            text="확인"
            onClick={() => {
              setIsClose();
              router.push(MYSTORE.INDEX);
            }}
          />
        </S.ModalFooter>
      }
    />
  );
};
