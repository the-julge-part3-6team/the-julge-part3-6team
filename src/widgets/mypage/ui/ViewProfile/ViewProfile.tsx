import React from 'react';
import * as S from './ViewProfile.styled';
import { useRouter } from 'next/router';

export const ViewProfile = ({ data }: MyPageDataType) => {
  const router = useRouter();
  const ProfileData = data.data.item;

  return (
    <>
      <S.ProfileBox>
        <S.ProfileNameBox>
          <dt>이름</dt>
          <dd>{ProfileData.name}</dd>
        </S.ProfileNameBox>

        <S.ProfileDetailBox>
          <li>
            <img src="" alt="" />
            {ProfileData.phone}
          </li>
          <li>
            <img src="" alt="" />
            선호 지역: {ProfileData.address}
          </li>
        </S.ProfileDetailBox>

        <p>{ProfileData.bio}</p>
      </S.ProfileBox>
    </>
  );
};
