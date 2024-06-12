import { Notice } from '@/types/post';
import PostList from '../PostList/PostList';

interface Props {
  items?: Notice[];
}

function PostEntire({ items }: Props) {
  return <PostList items={items} count={6} />;
}

export default PostEntire;
