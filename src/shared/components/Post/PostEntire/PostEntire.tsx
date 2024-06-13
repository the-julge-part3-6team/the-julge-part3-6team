import { NoticeData } from '@/shared/types/post';
import PostList from '../PostList/PostList';

interface Props {
  items?: NoticeData[];
}

function PostEntire({ items }: Props) {
  return <PostList items={items} count={6} />;
}

export default PostEntire;
