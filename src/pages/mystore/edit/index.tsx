import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import { AddStoreImage } from '@/components/store/ui/addStoreImage/AddStoreImage';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { useSearchParams } from 'next/navigation';
import { useUserQuery } from '@/models/user/useUserData';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useModal } from '@/shared/store/useModal';
import Modal from '@/shared/components/Modal/Modal';
import { handleSubmit } from '../../../models/store/handleSubmit';
import { mutateUpdateStore } from '@/models/store/mutateUpdateStore';
import { STORE_FORM_ERRORS_INITIAL_VALUE } from '@/constant/store';
import { ModalContainer } from '@/widgets/updateStore';
import { useUserData } from '@/shared/store/useUserData';
import { usePatchFormData } from '@/models/store/usePatchFromData';

const index = () => {
  const { type } = useUserData();
  const router = useRouter();
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const { setIsOpen } = useModal();

  if (type === 'employee') {
    router.push('/mypage');
    return;
  }

  const { mutate } = mutateUpdateStore(shop_id || '', setIsOpen);

  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>가게 정보</S.Title>
          <InputContent mutate={mutate} edit shop_id={shop_id} />
        </S.MyStoreContentWrap>
        <ModalContainer />
      </S.Body>
    </>
  );
};

export default index;
