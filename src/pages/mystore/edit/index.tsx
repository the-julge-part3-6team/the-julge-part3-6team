import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import { AddStoreImage } from '@/components/ceo/ui/addStoreImage/AddStoreImage';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { useSearchParams } from 'next/navigation';
import { useUserQuery } from '@/components/user/model/useUserData';
import { useEffect, useState } from 'react';
import { mutateUpdateStore } from './model/mutateUpdateStore';
import { handleValidate } from './model/handleValidate';
import { useRouter } from 'next/router';
import { useToast } from '@/shared/store/useToast';
import { useModal } from '@/shared/store/useModal';
import Modal from '@/shared/components/Modal/Modal';
import { Employer } from '@/shared/components/Header/employer/Employer';
import { handleSubmit } from './model/handleSubmit';

const index = () => {
  const {
    name,
    category,
    address1,
    address2,
    originalHourlyPay,
    description,
    imageUrl,
    setStoreName,
    setStoreType,
    setStoreAddress,
    setStoreAddressDetail,
    setPay,
    setStoreDescription,
    setStoreImage,
  } = useAddStoreState();
  const [errors, setErrors] = useState({
    name: '',
    category: '',
    address1: '',
    address2: '',
    originalHourlyPay: '',
    imageUrl: '',
    description: '',
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const { setIsOpen, setIsClose } = useModal();
  const { data, isError, isLoading } = useUserQuery();
  const store: Store = data?.data?.item?.shop?.item;

  useEffect(() => {
    if (isLoading) return;
    if (!shop_id) router.push('/mystore');
    setStoreName(store.name);
    setStoreType(store.category);
    setStoreAddress(store.address1);
    setStoreAddressDetail(store.address2);
    setPay(store.originalHourlyPay);
    setStoreDescription(store.description);
    setStoreImage(store.imageUrl);
  }, [store]);

  const { mutate } = mutateUpdateStore(shop_id || '', setIsOpen);

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
                    name,
                    category,
                    address1,
                    address2,
                    imageUrl,
                    originalHourlyPay,
                    description,
                  },
                  mutate,
                  setErrors,
                )
              }
            />
          </S.ButtonWrap>
        </S.ButtonCotainer>
        <Modal
          modalKey="수정완료 모달"
          modalHeader={<S.ModalHeader>수정이 완료되었습니다.</S.ModalHeader>}
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
