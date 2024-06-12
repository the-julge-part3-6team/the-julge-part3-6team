import * as S from './AddStoreImage.styled';
import { useCreatePresignedUrl } from '../../../../models/employer/useCreatePresignedUrl';
import Image from 'next/image';
import fiCamera from '../../../../../public/fiCamera.svg';
import { useAddStoreState } from '@/shared/store/useAddStoreState';
import { useSaveImage } from '@/models/employer/useSaveImage';
import { handleImageChange } from '@/models/store/handleImageChange';

export const AddStoreImage = () => {
  const { imageUrl, setStoreImage } = useAddStoreState();
  const { mutateAsync: mutatePresignedUrl } = useCreatePresignedUrl();
  const { mutateAsync: mutateImage } = useSaveImage();

  return (
    <S.AddImageLayout>
      <S.Label>가게 이미지</S.Label>
      <S.AddProfileContainer>
        <label>
          <input
            type="file"
            onChange={e =>
              e.target.files &&
              handleImageChange(
                e.target.files[0],
                mutatePresignedUrl,
                mutateImage,
                setStoreImage,
              )
            }
          />
        </label>

        <Image src={fiCamera} alt="카메라 아이콘" />
        <p>이미지 추가하기</p>
        {imageUrl && <Image src={imageUrl} fill alt="added_image" />}
      </S.AddProfileContainer>
    </S.AddImageLayout>
  );
};
