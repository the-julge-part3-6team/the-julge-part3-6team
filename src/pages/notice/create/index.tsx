import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createNotice';
import PrimaryButton from '@/shared/components/Button/RedButton/RedButton';
import { useEffect, useState } from 'react';
import { createNoticeMutate } from '@/models/notice/createNoticeMutate';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { dateTransfromIso } from '@/shared/utils/dateTransform';
import { useModal } from '@/shared/store/useModal';
import Modal from '@/shared/components/Modal/Modal';
import { onSubmit } from '@/models/notice/noticeSubmit';

const index = () => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const router = useRouter();
  const { setIsOpen, setIsClose } = useModal();

  const [notice, setNotice] = useState({
    hourlyPay: 0,
    startsAt: '',
    workhour: 0,
    description: '',
  });

  const [errors, setErrors] = useState({
    hourlyPay: '',
    startsAt: '',
    workhour: '',
  });

  useEffect(() => {
    if (!shop_id) router.push('/mystore');
  }, []);

  const { mutate } = createNoticeMutate(shop_id || '', setIsOpen);

  return (
    <>
      <Header />
      <S.BodyWrap>
        <S.Body>
          <S.Title>공고 등록</S.Title>
          <InputContent notice={notice} setNotice={setNotice} errors={errors} />
          <S.ButtonWrap>
            <PrimaryButton
              text="등록하기"
              onClick={() => onSubmit(notice, setErrors, mutate)}
            />
          </S.ButtonWrap>
        </S.Body>
        <Modal
          modalKey="등록완료 모달"
          modalHeader={<S.ModalHeader>등록이 완료되었습니다.</S.ModalHeader>}
          modalFooter={
            <S.ModalFooter>
              <PrimaryButton
                text="확인"
                onClick={() => {
                  setIsClose;
                  router.push('/mystore');
                }}
              />
            </S.ModalFooter>
          }
        />
      </S.BodyWrap>
    </>
  );
};

export default index;
