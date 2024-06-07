import React from 'react';
import * as S from './index.styled';
import { AddProfile } from '@/widgets/mypage/ui/AddProfile/AddProfile';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { useUserQuery } from '@/components/user/model/useUserData';
import { ViewProfile } from '@/widgets/mypage/ui/ViewProfile/ViewProfile';
import { EmptyList } from '@/widgets/mypage/ui/EmptyList/EmptyList';

const MyPage = () => {
  const { data, isError, isLoading } = useUserQuery();
  const content = data?.data.item.phone ? (
    <ViewProfile data={data} />
  ) : (
    <AddProfile />
  );

  console.log(data);
  return (
    <>
      <Header />
      {content ? (
        <>
          <S.Container>
            <S.ContentWrap>
              <S.ViewFlexBox>
                <S.MyPageHeader>내 프로필</S.MyPageHeader>
                {content}
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
              {content}
            </S.ContentWrap>
          </S.Container>
        </>
      )}
      <Footer />
    </>
  );
};

export default MyPage;
