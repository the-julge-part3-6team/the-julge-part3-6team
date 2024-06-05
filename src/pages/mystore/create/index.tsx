import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { InputContent } from '@/widgets/createStore';
import { AddStoreImage } from '@/components/ceo/ui/addStoreImage/AddStoreImage';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useAddStoreState } from '@/shared/store/useAddStoreState';

const index = () => {
  const {
    storeName,
    storeType,
    storeAddress,
    storeAddressDetail,
    pay,
    storeImage,
    storeDescription,
  } = useAddStoreState();

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
            onChange={e => console.log(e.target.value)}
            value=""
            label="가게 설명"
            id="1"
          />
        </S.MyStoreContentWrap>

        <S.ButtonCotainer>
          <S.ButtonWrap>
            <RedButton
              text="등록하기"
              onClick={() =>
                console.log({
                  store: {
                    storeName,
                    storeType,
                    storeAddress,
                    storeAddressDetail,
                    pay,
                    storeImage,
                    storeDescription,
                  },
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
