import * as S from './Post.styled';
import { PostContent } from '@/types/post';
import PostImage from './PostImage/PostImage';
import PostInform from './PostInform/PostInform';
import PostPrice from './PostPrice/PostPrice';

const Post = ({
  status,
  title,
  date,
  location,
  price,
  priceChange,
  imgSrc,
}: PostContent) => {
  return (
    <>
      <S.PostContainer status={status}>
        <PostImage status={status} imgSrc={imgSrc} />
        <S.PostContent>
          <S.PostTitle>{title}</S.PostTitle>
          <PostInform status={status} type="시간" content={date} />
          <PostInform status={status} type="장소" content={location} />
        </S.PostContent>
        <PostPrice status={status} price={price} priceChange={priceChange} />
      </S.PostContainer>
    </>
  );
};

export default Post;
