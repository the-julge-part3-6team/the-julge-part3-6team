import React, { useEffect, useState } from 'react';
import Input from '@/shared/components/Input/Input';
import * as S from './RegistrationProfile.styled';
import { locations } from '@/components/filter/constant/locations';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { useProfileData } from '@/shared/store/useProfileData';
import { useUserValidation } from '@/models/user/useUserUpdateForm';
import { EditProfileModal } from '../editProfileModal/EditProfileModal';
import { onChangeValue } from '@/models/user/onChangeValue';
import { USER_FORM_ERRORS_INITIAL_VALUE } from '@/constant/user';
import { replacePhoneValue } from '@/shared/utils/replacePhoneValue';
import { submitProfile } from '@/models/user/submitProfile';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUserQuery } from '@/models/user/useUserData';
import { useUpdateUserState } from '@/models/user/useUpdateUserState';

interface Props {
  edit: boolean;
}

export const RegistrationProfile = ({ edit }: Props) => {
  const { name, phone, address, bio, setName, setPhone, setAddress, setBio } =
    useProfileData();
  const [error, setError] = useState(USER_FORM_ERRORS_INITIAL_VALUE);
  const formData = { name, phone, address, bio };
  const param = useSearchParams();
  const router = useRouter();
  const { data, isError, isLoading } = useUserQuery();
  const user_id = param.get('user_id');
  const item: UserDataType = data?.data.item;

  const result = useUserValidation();

  if (edit) {
    useUpdateUserState(isLoading, user_id!, router, item, {
      setName,
      setPhone,
      setAddress,
      setBio,
    });
  }

  return (
    <>
      <EditProfileModal />
      <S.CreateForm
        onSubmit={e => submitProfile({ e, formData, setError, result })}
      >
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
              value={replacePhoneValue(phone)}
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
