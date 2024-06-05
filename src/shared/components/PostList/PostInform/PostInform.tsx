import Image from 'next/image';
import * as S from './PostInform.styled';
import redClockImg from '@/assets/redclock.svg';
import redLocationImg from '@/assets/redlocation.svg';
import grayClockImg from '@/assets/grayclock.svg';
import grayLocationImg from '@/assets/graylocation.svg';

interface PostInformProps {
  status: 'closed' | 'expired' | 'active';
  type: '시간' | '장소';
  content: string;
}
const PostInform = ({ status, type, content }: PostInformProps) => {
  let iconSrc;
  if (type === '시간') {
    iconSrc = status === 'active' ? redClockImg : grayClockImg;
  } else {
    iconSrc = status === 'active' ? redLocationImg : grayLocationImg;
  }

  return (
    <S.PostInform status={status}>
      <S.PostInformImage>
        <Image src={iconSrc} alt={`${type} 아이콘`} />
      </S.PostInformImage>
      {content}
    </S.PostInform>
  );
};

export default PostInform;
