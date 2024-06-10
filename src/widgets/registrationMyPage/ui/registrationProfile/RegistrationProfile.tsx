import React, { useState } from 'react';
import Input from '@/shared/components/Input/Input';
import * as S from './RegistrationProfile.styled';
import { locations } from '@/components/filter/constant/locations';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useProfileData } from '@/shared/store/useProfileData';
import { useUserValidation } from '@/widgets/mypage/model/useUserUpdateForm';
import { EditProfileModal } from '../editProfileModal/EditProfileModal';
import { onChangeValue } from '../../model/onChangeValue';
import { isValidData } from '../../model/isValidDate';

export const RegistrationProfile = () => {
  const { name, phone, address, bio, setName, setPhone, setAddress, setBio } =
    useProfileData();

  const [error, setError] = useState<FieldErrors>({
    name,
    phone,
    address,
    bio,
  });
  const result = useUserValidation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = isValidData({ name, phone, address, bio }, setError);
    if (isValid) result.mutate({ name, phone, address, bio });
  };

  return (
    <>
      <EditProfileModal />
      <S.CreateForm onSubmit={onSubmit}>
        <S.CreateFormUl>
          <li>
            <Input
              value={name}
              id={'name'}
              placeholder="입력"
              label={'이름*'}
              type={'basic'}
              inputType="text"
              onChange={e =>
                onChangeValue(e, { setName, setPhone, setAddress, setBio })
              }
              error={error.name}
            />
          </li>
          <li>
            <Input
              value={phone}
              id="phone"
              placeholder="입력"
              label={'연락처*'}
              type={'basic'}
              inputType="text"
              onChange={e =>
                onChangeValue(e, { setName, setPhone, setAddress, setBio })
              }
              error={error.phone}
            />
          </li>
          <li>
            <Input
              value={address}
              placeholder="선택"
              label={'선호 지역'}
              type={'dropdown'}
              inputType="text"
              options={locations}
              onChange={e =>
                onChangeValue(e, { setName, setPhone, setAddress, setBio })
              }
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
              onChange={e =>
                onChangeValue(e, { setName, setPhone, setAddress, setBio })
              }
            />
          </li>
        </S.CreateFormUl>
        <S.CustomRedButton>등록하기</S.CustomRedButton>
      </S.CreateForm>
    </>
  );
};
