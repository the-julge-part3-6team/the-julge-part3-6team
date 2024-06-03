import RedButton from '@/shared/components/Button/RedButton/RedButton';
import * as S from './MyStoreContent.styled';
import { useQuery } from '@tanstack/react-query';
import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';

const MyStoreContent = () => {
  const { user_id } = useUserData();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['/shops/'],
    queryFn: () => {
      return apiInstance.get(`/users/${user_id}`);
    },
    enabled: !!user_id,
  });

  console.log(data);

  return (
    <S.MyStoreContent>
      <S.Description>내 가게를 소개하고 공고도 등록해 보세요.</S.Description>
      <S.ButtonWrap>
        <RedButton text="가게 등록하기" onClick={() => {}} />
      </S.ButtonWrap>
    </S.MyStoreContent>
  );
};

export default MyStoreContent;
