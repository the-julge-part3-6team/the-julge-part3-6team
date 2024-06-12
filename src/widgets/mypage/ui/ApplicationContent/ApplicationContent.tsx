import { ApplicationDetailsEmptyList } from '@/components/user';
import { useUserSupportList } from '@/models/user/useUserSupportList';
import { renderSpinner } from '@/shared/utils/renderSpinner';

export const ApplicationContent = ({ isLoading }: { isLoading: boolean }) => {
  // 유저의 지원 목록 조회 useUserSupportList
  const { data, isError } = useUserSupportList();
  const AnnouncementApplicationListCount = data?.data?.count;

  return (
    <>
      {!AnnouncementApplicationListCount
        ? renderSpinner(<ApplicationDetailsEmptyList />, isLoading)
        : 'asd'}
    </>
  );
};
