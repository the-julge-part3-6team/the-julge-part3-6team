import { PostContent } from '@/shared/types/post';
import Post from './Post/Post';
import * as S from './PostList.styled';

interface Props {
  postList: PostContent[];
}

const PostList = ({ postList }: Props) => {
  return (
    <S.PostListContainer>
      {postList.map(post => (
        <Post {...post} />
      ))}
    </S.PostListContainer>
  );
};

export default PostList;
