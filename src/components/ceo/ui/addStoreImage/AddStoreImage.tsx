import * as S from './AddStoreImage.styled';
import { useEffect, useState } from 'react';
import { useCreatePresignedUrl } from '../../../../models/employer/useCreatePresignedUrl';
import Image from 'next/image';
import fiCamera from '../../../../../public/fiCamera.svg';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { useSaveImage } from '@/models/employer/useSaveImage';
import { handleImageUpload } from '@/models/employer/useImageUpload';

export const AddStoreImage = () => {
  const [file, setFile] = useState<File>();
  const { imageUrl, setStoreImage } = useAddStoreState();
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
        {imageUrl && <Image src={imageUrl} fill alt="added_image" />}
      </S.AddProfileContainer>
    </S.AddImageLayout>
  );
};
