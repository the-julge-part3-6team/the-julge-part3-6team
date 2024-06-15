import React from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { RegistrationProfile } from '@/widgets/registrationMyPage';

const CreateForm = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrap>
          <>
            <S.MyPageHeader>내 프로필</S.MyPageHeader>
            <RegistrationProfile edit={false} />
          </>
        </S.ContentWrap>
      </S.Container>
      <Footer />
    </>
  );
};

export default CreateForm;
