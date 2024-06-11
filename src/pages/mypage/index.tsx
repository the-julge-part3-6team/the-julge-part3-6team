import React, { useEffect } from 'react';
import * as S from './index.styled';
import { AddProfile } from '@/widgets/mypage/ui/AddProfile/AddProfile';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { useUserQuery } from '@/models/user/useUserData';
import { ViewProfile } from '@/widgets/mypage/ui/ViewProfile/ViewProfile';
import { EmptyList } from '@/widgets/mypage/ui/EmptyList/EmptyList';
import { useUserData } from '@/shared/store/useUserData';
import { useRouter } from 'next/router';
import { renderSpinner } from '@/shared/utils/renderSpinner';

const MyPage = () => {
  const { type } = useUserData();
  const router = useRouter();
  if (type === 'employer') router.push('/mystore');

  const { data, isError, isLoading } = useUserQuery();
  const userData = data?.data.item;
  const content = data?.data?.item?.phone ? (
    <ViewProfile userData={userData} />
  ) : (
    <AddProfile />
  );

  return (
    <>
      <Header />
      {content.type.name === 'ViewProfile' ? (
        <>
          <S.Container>
            <S.ContentWrap>
              <S.ViewFlexBox>
                <S.MyPageHeader>내 프로필</S.MyPageHeader>
                {renderSpinner(content, isLoading)}
              </S.ViewFlexBox>
            </S.ContentWrap>
          </S.Container>
          <EmptyList />
        </>
      ) : (
        <>
          <S.Container>
            <S.ContentWrap>
              <S.MyPageHeader>내 프로필</S.MyPageHeader>
              {renderSpinner(content, isLoading)}
            </S.ContentWrap>
          </S.Container>
        </>
      )}
      <Footer />
    </>
  );
};

export default MyPage;
