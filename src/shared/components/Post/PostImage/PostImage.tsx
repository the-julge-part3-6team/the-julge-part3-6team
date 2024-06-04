import Image, { StaticImageData } from 'next/image';
import * as S from './PostImage.styled';
import testImg from '@/assets/test.jpg';

interface PostImageProps {
  status: 'closed' | 'expired' | 'active';
  imgSrc?: StaticImageData;
}

const PostImage = ({ status, imgSrc }: PostImageProps) => {
  return (
    <S.PostImageContainer>
      <S.PostImage status={status}>
        <Image
          src={imgSrc || testImg}
          alt="가게 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </S.PostImage>
      {status === 'closed' && <S.PostStatusLabel>마감 완료</S.PostStatusLabel>}
      {status === 'expired' && <S.PostStatusLabel>지난 공고</S.PostStatusLabel>}
    </S.PostImageContainer>
  );
};

export default PostImage;
