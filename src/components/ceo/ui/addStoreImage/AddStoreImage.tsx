import Image from 'next/image';
import * as S from './AddStoreImage.styled';
import fiCamera from '../../../../../public/fiCamera.svg';
import { ChangeEvent } from 'react';

const AddStoreImage = () => {
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      // 파일 처리 로직 (예: 상태 업데이트 또는 서버로 업로드)
      console.log(file);
    }
  };

  return (
    <S.AddImageLayout>
      <S.Label>가게 이미지</S.Label>
      <S.AddProfileContainer>
        <label>
          <input type="file" />
        </label>
        <Image src={fiCamera} alt="카메라 아이콘" />
        <p>이미지 추가하기</p>
      </S.AddProfileContainer>
    </S.AddImageLayout>
  );
};

export default AddStoreImage;
