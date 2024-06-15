import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as S from './noticedetail/index.styled';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import PostInform from '@/shared/components/Post/PostInform/PostInform';
import CustomModal from './noticedetail/component/CustomModal/CustomModal';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import cautionImg from '@/assets/caution.svg';
import checkImg from '@/assets/check.svg';
import { useModal } from '@/shared/store/useModal';
import { useUserQuery } from '@/models/user/useUserData';
import PostPrice from '@/shared/components/Post/PostPrice/PostPrice';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import { useHandleModal } from './noticedetail/utils/useHandleModal';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';
import OwnerTable from '@/shared/components/OwnerTable/OwnerTable';
import { useGetApplicantsForJobPosting } from '@/models/employer/useGetApplicantsForJobPosting';
import { useSetApprovalStatus } from '@/models/employer/useSetApprovalStatus';
import { useOwnerSupportList } from '@/models/employer/useOwnerSupportList';
import Pagination from '@/shared/components/Pagination/Pagination';

const NoticeDetailCeo = () => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');
  const {
    data: userData,
    isError: userError,
    isLoading: userLoading,
  } = useUserQuery();
  const {
    data: noticeData,
    isError: noticeError,
    isLoading: noticeLoading,
  } = useGetNoticeDetail(shop_id || '', notice_id || '');
  const { setIsOpen, key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false);
  const router = useRouter();
  const [recentPosts, setRecentPosts] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const recentPostsFromStorage = localStorage.getItem('recentPosts');
      return recentPostsFromStorage ? JSON.parse(recentPostsFromStorage) : [];
    }
    return [];
  });

  useEffect(() => {
    if (notice_id && typeof window !== 'undefined') {
      const saveRecentPost = (postId: string) => {
        setRecentPosts(prevPosts => {
          const newPosts = [
            postId,
            ...prevPosts.filter(id => id !== postId),
          ].slice(0, 6);
          localStorage.setItem('recentPosts', JSON.stringify(newPosts));
          return newPosts;
        });
      };
      saveRecentPost(notice_id);
    }
  }, [notice_id]);

  const handleModal = useHandleModal({ userData, setIsApplied });

  const modalHeader =
    key === 'profileAlert' ? (
      <>
        <Image src={cautionImg} alt="경고 표시" />내 프로필을 먼저 등록해주세요.
      </>
    ) : key === 'applySuccess' ? (
      <>
        <Image src={checkImg} alt="체크 표시" />
        신청이 완료되었습니다.
      </>
    ) : null;

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
          <S.BigText>
            {noticeData?.data.item.shop.item.name}사장님 공고 상세 페이지
          </S.BigText>
        </S.TextWrap>

        <S.ContextWrap>
          <S.ImageContainer>
            <img
              src={noticeData?.data.item.shop.item.imageUrl}
              alt={noticeData?.data.item.shop.item.name}
            />
          </S.ImageContainer>

          <S.TextContainer>
            <S.SmallText>시급</S.SmallText>
            <S.PriceWrap>
              <PostPrice
                isClosed={false}
                defaultHourlyPay={noticeData?.data.item.hourlyPay}
                currentHourlyPay={
                  noticeData?.data.item.shop.item.originalHourlyPay
                }
              />
            </S.PriceWrap>
            <S.WidgetWrap>
              <PostInform
                isClosed={false}
                type="시간"
                content={formatWorkTime({
                  type: 'notice',
                  startsAt: noticeData?.data.item.startsAt,
                  workHour: noticeData?.data.item.workhour,
                })}
              />
              <PostInform
                isClosed={false}
                type="장소"
                content={noticeData?.data.item.shop.item.address1}
              />
            </S.WidgetWrap>
            <S.DetailText>
              <p>{noticeData?.data.item.shop.item.description}</p>
            </S.DetailText>
            {isApplied ? (
              <div style={{ width: '346px' }}>
                <CustomButton
                  onClick={handleModal.cancelClick}
                  color="#EA3C12"
                  text="취소하기"
                />
              </div>
            ) : (
              <CustomButton
                onClick={handleEditClick}
                color="#EA3C12"
                text="편집하기"
              />
            )}
          </S.TextContainer>
        </S.ContextWrap>

        <S.DescripContainer>
          <S.SmallText isBlack>공고 설명</S.SmallText>
          <p></p>
          <p>{noticeData?.data.item.description}</p>
        </S.DescripContainer>

        {/* 여기에 테이블 컴포넌트 붙이시면 됩니다 */}
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
        {/* 여기에 테이블 컴포넌트 붙이시면 됩니다 */}
      </S.PageLayout>
      <Footer />
      <CustomModal
        modalKey={key}
        modalHeader={modalHeader}
        modalFooter={
          key === 'profileAlert' || key === 'applySuccess' ? (
            <div style={{ width: '80px' }}>
              <CustomButton
                text="확인"
                color="#EA3C12"
                onClick={handleModal.confirm}
              />
            </div>
          ) : null
        }
      />

      {isOpen && key === 'cancelModal' && (
        <CustomModal
          modalKey="cancelModal"
          modalHeader={
            <>
              <Image src={checkImg} alt="체크 표시" />
              <p>신청을 취소하시겠어요?</p>
            </>
          }
          modalFooter={
            <>
              <div style={{ width: '80px' }}>
                <CustomButton
                  onClick={handleModal.closeCancelModal}
                  text="아니오"
                  color="#EA3C12"
                />
              </div>
              <div style={{ width: '80px' }}>
                <RedButton
                  onClick={handleModal.confirmCancel}
                  text="취소하기"
                />
              </div>
            </>
          }
        />
      )}
    </>
  );
};

export default NoticeDetailCeo;
