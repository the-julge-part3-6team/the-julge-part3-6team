import React from 'react';
import * as S from './ViewProfile.styled';
import { useRouter } from 'next/router';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import { replacePhoneValue } from '@/shared/utils/replacePhoneValue';
import { MYPAGE } from '@/constant/path';

export const ViewProfile = ({ userData }: { userData: UserDataType }) => {
  const router = useRouter();
  const user_id = userData.id;

  return (
    <>
      <S.ProfileBox>
        <S.ProfileNameBox>
          <dt>이름</dt>
          <dd>{userData.name}</dd>
        </S.ProfileNameBox>

        <S.ProfileDetailBox>
          <li>
            <img src="" alt="" />
            {replacePhoneValue(userData.phone)}
          </li>
          <li>
            <img src="" alt="" />
            선호 지역: {userData.address}
          </li>
        </S.ProfileDetailBox>

        <p>{userData.bio}</p>
        <CustomButton
          text="편집하기"
          color="#EA3C12"
          onClick={() => router.push(`${MYPAGE.EDIT}?user_id=${user_id}`)}
        />
      </S.ProfileBox>
    </>
  );
};
