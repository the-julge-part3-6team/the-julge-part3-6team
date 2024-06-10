import React, { useEffect } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { RegistrationProfile } from '@/widgets/registrationMyPage';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useUserQuery } from '@/models/user/useUserData';
import { useProfileData } from '@/shared/store/useProfileData';

const EditForm = () => {
  const { setName, setPhone, setAddress, setBio } = useProfileData();
  const param = useSearchParams();
  const router = useRouter();
  const { data, isError, isLoading } = useUserQuery();
  const user_id = param.get('user_id');
  const item: UserDataType = data?.data.item;

  useEffect(() => {
    if (isLoading) return;
    if (!user_id) router.push('/mystore');
    if (item.name) setName(item.name);
    if (item.phone) setPhone(item.phone);
    if (item.address) setAddress(item.address);
    if (item.bio) setBio(item.bio);
  }, [item]);

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrap>
          <>
            <S.MyPageHeader>내 프로필</S.MyPageHeader>
            <RegistrationProfile />
          </>
        </S.ContentWrap>
      </S.Container>
      <Footer />
    </>
  );
};

export default EditForm;
