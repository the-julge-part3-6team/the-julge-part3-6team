import React, { ChangeEvent, useEffect, useState } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import Input from '@/shared/components/Input/Input';
import { locations } from '@/components/filter/constant/locations';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useProfileData } from '@/shared/store/useProfileData';
import { useUserValidateion } from '@/widgets/mypage/model/useUserUpdateForm';

const CreateForm = () => {
  const { name, phone, address, bio, setName, setPhone, setAddress, setBio } =
    useProfileData();

  const { mutate } = useUserValidateion();

  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const action: { [key: string]: Function } = {
      name: setName,
      phone: setPhone,
      address: setAddress,
      bio: setBio,
    };
    const zustandAction = action[e.target.id];
    zustandAction(e.target.value);
  };

  useEffect(() => {
    console.log('Phone:', phone);
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Bio:', bio);
  }, [phone, name, address, bio]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ name, phone, address, bio });
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrap>
          <>
            <S.MyPageHeader>내 프로필</S.MyPageHeader>
            <S.CreateForm onSubmit={onSubmit}>
              <S.CreateFormUl>
                <li>
                  <Input
                    id={'name'}
                    placeholder="입력"
                    label={'이름*'}
                    type={'basic'}
                    inputType="text"
                    onChange={onChangeValue}
                  />
                </li>
                <li>
                  <Input
                    id="phone"
                    placeholder="입력"
                    label={'연락처*'}
                    type={'basic'}
                    inputType="text"
                    onChange={onChangeValue}
                  />
                </li>
                <li>
                  <Input
                    placeholder="선택"
                    label={'선호 지역'}
                    type={'dropdown'}
                    inputType="text"
                    options={locations}
                    onChange={onChangeValue}
                    onClick={(option: string) => setAddress(option)}
                  />
                </li>

                <li>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="입력"
                    label="소개"
                    value={bio}
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
