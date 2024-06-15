import { MYSTORE } from '@/constant/path';
import * as S from './ModalContainer.styled';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import Modal from '@/shared/components/Modal/Modal';
import { useModal } from '@/shared/store/useModal';
import { useRouter } from 'next/router';

export const ModalContainer = () => {
  const router = useRouter();
  const { setIsClose } = useModal();

  const onClickConfirm = () => {
    setIsClose();
    router.push(MYSTORE.INDEX);
  };

  return (
    <>
      <Modal
        modalKey="등록완료 모달"
        modalHeader={<S.ModalHeader>등록이 완료되었습니다.</S.ModalHeader>}
        modalFooter={
          <S.ModalFooter>
            <RedButton text="확인" onClick={onClickConfirm} />
          </S.ModalFooter>
        }
      />
      <Modal
        modalKey="이미 등록된 가게가 존재합니다."
        modalHeader={
          <S.ModalHeader>이미 등록된 가게가 존재합니다.</S.ModalHeader>
        }
        modalFooter={
          <S.ModalFooter>
            <RedButton text="확인" onClick={onClickConfirm} />
          </S.ModalFooter>
        }
      />
    </>
  );
};
