import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { useUserUpdateForm } from '@/widgets/mypage/model/useUserValidateion';
import Input from '@/shared/components/Input/Input';
import { locations } from '@/components/filter/constant/locations';
import { Textarea } from '@/shared/components/Textarea/Textarea';

const CreateForm = () => {
  const {
    PhoneValidation,
    errors,
    locationValidation,
    handleSubmit,
    setError,
  } = useUserUpdateForm();

  const [value, setValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrap>
          <>
            <S.MyPageHeader>내 프로필</S.MyPageHeader>
            <S.CreateForm
              onSubmit={handleSubmit(data => {
                console.log(data);
              })}
            >
              <S.CreateFormUl>
                <li>
                  <Input
                    placeholder="입력"
                    label={'이름*'}
                    type={'basic'}
                    inputType="text"
                  />
                </li>
                <li>
                  <Input
                    placeholder="입력"
                    label={'연락처*'}
                    type={'basic'}
                    inputType="text"
                    register={PhoneValidation}
                    error={errors.phone?.message}
                  />
                </li>
                <li>
                  <Input
                    placeholder="선택"
                    label={'선호 지역'}
                    type={'dropdown'}
                    inputType="text"
                    options={locations}
                  />
                </li>

                <li>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="입력"
                    label="소개"
                    value={value}
                    onChange={onChangeValue}
                  />
                </li>
              </S.CreateFormUl>
              <S.CustomRedButton>등록하기</S.CustomRedButton>
            </S.CreateForm>
          </>
        </S.ContentWrap>
      </S.Container>
      <Footer />
    </>
  );
};

export default CreateForm;
