import {
  ApplicationDetailsEmptyList,
  ApplicationHistoryTableContent,
} from '@/components/user';
import { useUserSupportList } from '@/models/user/useUserSupportList';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import { useState } from 'react';

export const ApplicationContent = ({ isLoading }: { isLoading: boolean }) => {
  // 유저의 지원 목록 조회 useUserSupportList
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 설정
  const { data, isError } = useUserSupportList({
    limit: 5,
    offset: (currentPage - 1) * 5,
  });
  const AnnouncementApplicationListCount = data?.data?.count;
  const listData = data?.data.items;

  const totalItems = data?.data?.count; // 공고 총 갯수
  const totalPages = Math.ceil(totalItems / 5);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // 페이지네이션 버튼 클릭했을 때, currentPage 변경
  };

  return (
    <>
      {!AnnouncementApplicationListCount
        ? renderSpinner(<ApplicationDetailsEmptyList />, isLoading)
        : renderSpinner(
            <ApplicationHistoryTableContent
              list={listData}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
              totalPages={totalPages}
            />,
            isLoading,
          )}
    </>
  );
};
