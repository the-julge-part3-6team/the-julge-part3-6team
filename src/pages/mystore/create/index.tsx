import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import { AddStoreImage } from '@/components/ceo/ui/addStoreImage/AddStoreImage';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { mutateAddStore } from './model/mutateAddStore';

const index = () => {
  const {
    storeName,
    storeType,
    storeAddress,
    storeAddressDetail,
    pay,
    storeImage,
    storeDescription,
    setStoreDescription,
  } = useAddStoreState();

  const { mutate } = mutateAddStore();

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
