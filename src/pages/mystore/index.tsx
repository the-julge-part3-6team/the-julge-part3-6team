import Header from '@/shared/components/Header/Header';
import * as S from './index.styled';
import { useUserQuery } from '@/components/user/model/useUserData';
import { NotfoundStore, FoundStore } from '@/widgets/mystore';
import { useUserData } from '@/shared/store/useUserData';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const index = () => {
  const { type } = useUserData();
  const router = useRouter();

  useEffect(() => {
    if (type === 'employee') {
      router.push('/mypage');
    }
  }, [type, router]);

  const { data, isError, isLoading } = useUserQuery();
  const storeData: Store = data?.data?.item?.shop?.item;

  let content = storeData ? (
    <FoundStore
      shop_id={storeData.id}
      imageUrl={storeData.imageUrl}
      name={storeData.name}
      address={storeData.address1}
      description={storeData.description}
    />
  ) : (
    <NotfoundStore />
  );

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      {type === 'employer' && (
        <S.Body>
          <S.MyStoreContentWrap>
            <S.Title>내 가게</S.Title>
            {content}
          </S.MyStoreContentWrap>
        </S.Body>
      )}
    </>
  );
};

export default index;
