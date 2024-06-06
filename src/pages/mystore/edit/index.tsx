import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import { AddStoreImage } from '@/components/ceo/ui/addStoreImage/AddStoreImage';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useUserQuery } from '@/components/user/model/useUserData';
import { useEffect } from 'react';
import { mutateUpdateStore } from './model/mutateUpdateStore';

const index = () => {
  const {
    id,
    storeName,
    storeType,
    storeAddress,
    storeAddressDetail,
    pay,
    storeImage,
    storeDescription,
    setStoreName,
    setStoreType,
    setStoreAddress,
    setStoreAddressDetail,
    setPay,
    setStoreDescription,
    setStoreImage,
  } = useAddStoreState();
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  console.log(shop_id);

  const { data, isError, isLoading } = useUserQuery();
  const store: Store = data?.data?.item?.shop?.item;

  useEffect(() => {
    if (isLoading) return;
    setStoreName(store.name);
    setStoreType(store.category);
    setStoreAddress(store.address1);
    setStoreAddressDetail(store.address2);
    setPay(String(store.originalHourlyPay));
    setStoreDescription(store.description);
    setStoreImage(store.imageUrl);
  }, [store]);

  const { mutate } = mutateUpdateStore(shop_id || '');

  return (
    <>
      <Header />
      <S.Body>
        <S.MyStoreContentWrap>
          <S.Title>가게 정보</S.Title>
          <InputContent />
          <AddStoreImage />
          <Textarea
            placeholder="입력"
            name="test"
            onChange={e => setStoreDescription(e.target.value)}
            value={storeDescription}
            label="가게 설명"
            id="1"
          />
        </S.MyStoreContentWrap>
        <S.ButtonCotainer>
          <S.ButtonWrap>
            <RedButton
              text="등록하기"
              onClick={() =>
                mutate({
                  id: id,
                  name: storeName,
                  category: storeType,
                  address1: storeAddress,
                  address2: storeAddressDetail,
                  description: storeDescription,
                  imageUrl: storeImage,
                  originalHourlyPay: Number(pay),
                })
              }
            />
          </S.ButtonWrap>
        </S.ButtonCotainer>
      </S.Body>
    </>
  );
};

export default index;
