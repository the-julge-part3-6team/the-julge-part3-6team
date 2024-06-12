import React from 'react';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';

import { useUserData } from '@/shared/store/useUserData';
import { useRouter } from 'next/router';
import { ProfileContent } from '@/widgets/mypage/ui/ProfileContent/ProfileContent';
import { ApplicationContent } from '@/widgets/mypage';
import { useUserQuery } from '@/models/user/useUserData';

const MyPage = () => {
  const router = useRouter();
  const { type } = useUserData();
  if (type === 'employer') router.push('/mystore');

  const { data, isError, isLoading } = useUserQuery();
  const userData = data?.data.item;

  return (
    <>
      <Header />
      <ProfileContent userData={userData} isLoading={isLoading} />
      <ApplicationContent userData={userData} isLoading={isLoading} />
      <Footer />
    </>
  );
};

export default MyPage;
