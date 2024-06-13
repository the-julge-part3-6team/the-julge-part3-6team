import React from 'react';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { useUserData } from '@/shared/store/useUserData';
import { ProfileContent } from '@/widgets/mypage/ui/ProfileContent/ProfileContent';
import { ApplicationContent } from '@/widgets/mypage';
import { useUserQuery } from '@/models/user/useUserData';

const MyPage = () => {
  const { data, isError, isLoading } = useUserQuery();
  const userData = data?.data.item;
  const isPhone = userData?.phone;

  return (
    <>
      <Header />
      <ProfileContent userData={userData} isLoading={isLoading} />
      {isPhone ? <ApplicationContent isLoading={isLoading} /> : ''}
      <Footer />
    </>
  );
};

export default MyPage;
