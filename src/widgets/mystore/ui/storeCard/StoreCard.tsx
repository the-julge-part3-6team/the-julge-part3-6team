import Image from 'next/image';
import * as S from './StoreCard.styled';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import PrimaryButton from '@/shared/components/Button/RedButton/RedButton';
import fiMap from '../../../../../public/fiMap.svg';
import { useRouter } from 'next/router';

interface Props {
  shop_id: string;
  imageUrl: string;
  name: string;
  address: string;
  description: string;
}

export const StoreCard = ({
  imageUrl,
  name,
  address,
  description,
  shop_id,
}: Props) => {
  const router = useRouter();
  return (
    <S.Layout>
      <S.ImageWrap>
        <Image src={imageUrl} alt="storeImage" fill />
      </S.ImageWrap>
      <S.StoreInfo>
        <h2>식당</h2>
        <S.StoreName>{name}</S.StoreName>
        <S.Address>
          <Image src={fiMap} alt="map_icon" />
          <p>{address}</p>
        </S.Address>
        <S.Description>{description}</S.Description>
        <S.BtnContainer>
          <CustomButton
            text="편집하기"
            color="#EA3C12"
            onClick={() => router.push(`/mystore/edit?shop_id=${shop_id}`)}
          />
          <PrimaryButton
            text="공고 등록하기"
            onClick={() => router.push('/mystore/edit')}
          />
        </S.BtnContainer>
      </S.StoreInfo>
    </S.Layout>
  );
};
