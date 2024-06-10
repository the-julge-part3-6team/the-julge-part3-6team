import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import { AddStoreImage } from '@/components/ceo/ui/addStoreImage/AddStoreImage';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { mutateAddStore } from '../../../models/store/mutateAddStore';
import { useState } from 'react';
import Modal from '@/shared/components/Modal/Modal';
import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import { handleSubmit } from '@/models/store/createStoreSubmit';
import { STORE_FORM_ERRORS_INITIAL_VALUE } from '@/constant/store';

const index = () => {
  const {
    id,
    name,
    category,
    address1,
    address2,
    originalHourlyPay,
    imageUrl,
    description,
    setStoreDescription,
  } = useAddStoreState();
  const [errors, setErrors] = useState(STORE_FORM_ERRORS_INITIAL_VALUE);
  const router = useRouter();
  const { setIsOpen, setIsClose } = useModal();
  const { mutate } = mutateAddStore(setIsOpen);

  const onClickConfirm = () => {
    setIsClose();
    router.push('/mystore');
  };

  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>가게 정보</S.Title>
          <InputContent errors={errors} />
          <AddStoreImage />
          <Textarea
            placeholder="입력"
            name="test"
            onChange={e => setStoreDescription(e.target.value)}
            value={description}
            label="가게 설명"
            id="1"
          />
        </S.MyStoreContentWrap>
        <S.ButtonCotainer>
          <S.ButtonWrap>
            <RedButton
              text="등록하기"
              onClick={() =>
                handleSubmit(
                  {
                    id,
                    name,
                    category,
                    address1,
                    address2,
                    originalHourlyPay,
                    imageUrl,
                    description,
                  },
                  setErrors,
                  mutate,
                )
              }
            />
          </S.ButtonWrap>
        </S.ButtonCotainer>
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
      </S.Body>
    </>
  );
};

export default index;
