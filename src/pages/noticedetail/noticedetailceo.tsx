import { useState } from 'react';
import * as S from './index.styled';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';
import OwnerTable from '@/shared/components/OwnerTable/OwnerTable';
import { useGetApplicantsForJobPosting } from '@/models/employer/useGetApplicantsForJobPosting';
import { useSetApprovalStatus } from '@/models/employer/useSetApprovalStatus';
import { useOwnerSupportList } from '@/models/employer/useOwnerSupportList';
import Pagination from '@/shared/components/Pagination/Pagination';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import ShopDetailWidget from '../../widgets/noticedetail/ui/ShopDetailWidget/ShopDetailWidget';
import DetailWidget from '../../widgets/noticedetail/ui/DetailWidget/DetailWidget';

const NoticeDetailCeo = () => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: noticeData,
    isError: noticeError, // 필요 없을시 제거
    isLoading: noticeLoading,
  } = useGetNoticeDetail(shop_id || '', notice_id || '');

  const [isApplied, setIsApplied] = useState(false);

  // 테이블 로직 시작

  const { data: applicationStatus, isLoading } = useGetApplicantsForJobPosting({
    shop_id,
    notice_id,
  });
  const applicationStatusList = applicationStatus?.data.items;
  const { mutate: setApprovalStatus } = useSetApprovalStatus();

  const onClickEvent = (id: string, isApproved: boolean) => {
    const status = isApproved ? 'accepted' : 'rejected';
    setApprovalStatus({ shop_id, notice_id, id, status });
  };
  // 페이지 네이션
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 설정
  const { data: ownerTableData, isError } = useOwnerSupportList({
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

  // 테이블 로직 끝

  // const handleEditClick = () => {
  //   router.push('/notice/edit');
  // };

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.TextWrap>
          <S.SmallText>식당</S.SmallText>
        </S.TextWrap>
        {renderSpinner(
          <ShopDetailWidget
            noticeData={noticeData}
            isApplied={isApplied}
            setIsApplied={setIsApplied}
          />,
          noticeLoading,
        )}
        <DetailWidget noticeData={noticeData} />
        {/* 테이블 컴포넌트 시작 */}
        <S.TextWrap>
          <S.BigText>신청자 목록</S.BigText>
        </S.TextWrap>
        {AnnouncementApplicationListCount ? (
          <>
            <OwnerTable list={listData} onClickEvent={onClickEvent} />
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
        {/* 테이블 컴포넌트 끝 */}
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetailCeo;
