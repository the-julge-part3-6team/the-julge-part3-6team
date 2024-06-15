import Image from 'next/image';
import * as S from './PostImage.styled';
import testImg from '@/assets/test.jpg';

interface PostImageProps {
  isClosed: boolean;
  imgSrc?: string;
  isExpired: boolean;
}

const PostImage = ({ isClosed, imgSrc, isExpired }: PostImageProps) => {
  return (
    <S.PostImageContainer>
      <S.PostImage isClosed={isClosed}>
        <Image
          src={imgSrc || testImg}
          alt="가게 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </S.PostImage>
      {isClosed && <S.PostStatusLabel>마감 완료</S.PostStatusLabel>}
      {isExpired && <S.PostStatusLabel>지난 공고</S.PostStatusLabel>}
    </S.PostImageContainer>
  );
};

export default PostImage;
