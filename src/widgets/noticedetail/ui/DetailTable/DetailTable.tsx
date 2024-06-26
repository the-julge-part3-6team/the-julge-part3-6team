import * as S from './DetailTable.styled';
import OwnerTable from '@/shared/components/OwnerTable/OwnerTable';
import Pagination from '@/shared/components/Pagination/Pagination';
import { useGetApplicantsForJobPosting } from '@/models/employer/useGetApplicantsForJobPosting';
import { useSetApprovalStatus } from '@/models/employer/useSetApprovalStatus';
import { useOwnerSupportList } from '@/models/employer/useOwnerSupportList';
import { useState } from 'react';

interface Prop {
  params: {
    shop_id: string | null;
    notice_id: string | null;
  };
}

export const DetailTable = ({ params }: Prop) => {
  const { shop_id, notice_id } = params;
  const { data: applicationStatus } = useGetApplicantsForJobPosting({
    shop_id,
    notice_id,
  });

  const isAccepted = !!applicationStatus?.data.items?.find(
    e => e.item.status === 'accepted',
  );

  const { mutate: setApprovalStatus } = useSetApprovalStatus();

  const onClickStatusEvent = (id: string, isApproved: boolean) => {
    const status = isApproved ? 'accepted' : 'rejected';
    setApprovalStatus({ shop_id, notice_id, id, status });
  };

  // 페이지 네이션
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 설정
  const { data: ownerTableData } = useOwnerSupportList({
    notice_id: notice_id,
    shop_id: shop_id,
    limit: 5,
    offset: (currentPage - 1) * 5,
  });
  const AnnouncementApplicationListCount = ownerTableData?.data?.count;
  const listData = ownerTableData?.data.items;

  const totalItems = ownerTableData?.data?.count; // 공고 총 갯수
  const totalPages = Math.ceil(totalItems / 5);

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // 페이지네이션 버튼 클릭했을 때, currentPage 변경
  };

  return (
    <>
      <S.TextWrap>
        <S.BigText>신청자 목록</S.BigText>
      </S.TextWrap>
      {AnnouncementApplicationListCount ? (
        <>
          <OwnerTable
            list={listData}
            onClickEvent={onClickStatusEvent}
            isAccepted={isAccepted}
          />
          <S.PageNationWrap>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </S.PageNationWrap>
        </>
      ) : (
        <div>일단 테이블 없어요.</div>
      )}
    </>
  );
};
