import * as S from './AddStoreImage.styled';
import { useEffect, useState } from 'react';
import { useCreatePresignedUrl } from '../../model/useCreatePresignedUrl';
import { useSaveImage } from '../../model/useSaveImage';
import { handleImageUpload } from '../../model/useImageUpload';
import Image from 'next/image';
import fiCamera from '../../../../../public/fiCamera.svg';
import { useAddStoreState } from '@/shared/store/useAddStoreState';

export const AddStoreImage = () => {
  const [file, setFile] = useState<File>();
  const { storeImage, setStoreImage } = useAddStoreState();
  const { mutatePresignedUrl } = useCreatePresignedUrl();
  const { mutateSaveImage } = useSaveImage();

  useEffect(() => {
    const test = async () => {
      const imageurl = await handleImageUpload(
        file,
        mutatePresignedUrl,
        mutateSaveImage,
      );
      setStoreImage(imageurl);
    };
    test();
  }, [file]);

  return (
    <S.AddImageLayout>
      <S.Label>가게 이미지</S.Label>
      <S.AddProfileContainer>
        <label>
          <input
            type="file"
            onChange={e => e.target.files && setFile(e.target.files[0])}
          />
        </label>

        <Image src={fiCamera} alt="카메라 아이콘" />
        <p>이미지 추가하기</p>
        {storeImage && <Image src={storeImage} fill alt="added_image" />}
      </S.AddProfileContainer>
    </S.AddImageLayout>
  );
};
