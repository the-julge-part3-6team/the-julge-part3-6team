import Header from '@/shared/components/Header/Header';
import React, { useState, useEffect } from 'react';
import * as S from './index.styled';
import Footer from '@/shared/components/Footer/Footer';
import Pagination from '@/shared/components/Pagination/Pagination';
import { useModal } from '@/shared/store/useModal';
import { useGetNotices } from '../../models/notice/useGetNotices';
import PostEntire from '@/shared/components/Post/PostEntire/PostEntire';
import { Filter } from '@/components/filter';
import { FilterState } from '@/shared/types/filterState';

const NoticeList = () => {
  const { isOpen, setIsOpen, setIsClose } = useModal(); // 필터 모달
  const [filters, setFilters] = useState<FilterState | null>(null); // 필터 값
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 정렬 드롭다운
  const [order, setOrder] = useState('마감임박순'); // 정렬
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 설정
  const { data, isLoading, error, refetch } = useGetNotices({
    offset: (currentPage - 1) * 6,
    limit: 6,
  });

  const totalItems = data?.data?.count; // 공고 총 갯수
  const noticeDatas = data?.data?.items; // { item{}, links[] }

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // 페이지네이션 버튼 클릭했을 때, currentPage 변경
  };

  // useEffect(() => {
  //   refetch();
  // }, [currentPage, refetch]);
  // currentPage 변경되면 다시 useGetNotices 호출

  const handleApplyFilters = (filters: FilterState) => {
    setFilters(filters);
  };
  // 필터 설정

  const toggleFilterModal = () => {
    if (isOpen) {
      setIsClose();
    } else {
      setIsOpen('필터모달');
    }
  };
  // 필터 모달 토글

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // 정렬 드롭다운 토글

  const handleSortOptionClick = (option: string) => {
    setOrder(option);
    setIsDropdownOpen(false);
  };
  // 정렬 state 변경

  const totalPages = Math.ceil(totalItems / 6);
  // 전체 페이지 설정

  return (
    <>
      <Header />
      <S.ContainerBackground>
        <S.Container>
          <S.CustomTitle>맞춤 공고</S.CustomTitle>
          {/* <PostList postList={customPostList} /> */}
        </S.Container>
      </S.ContainerBackground>
      <S.Container>
        <S.TitleWrap>
          <S.CustomTitle>전체 공고</S.CustomTitle>
          <S.ButtonWrap>
            <S.DeadlineButton onClick={toggleDropdown}>
              {order}
              <span>{isDropdownOpen ? '▲' : '▼'}</span>
            </S.DeadlineButton>
            {isDropdownOpen && (
              <S.DropdownMenu>
                <S.DropdownItem
                  onClick={() => handleSortOptionClick('마감임박순')}
                >
                  마감 임박순
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => handleSortOptionClick('시급많은순')}
                >
                  시급 많은순
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => handleSortOptionClick('시간적은순')}
                >
                  시간 적은순
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => handleSortOptionClick('가나다순')}
                >
                  가나다순
                </S.DropdownItem>
              </S.DropdownMenu>
            )}

            <S.FilterButton onClick={toggleFilterModal}>
              상세 필터
            </S.FilterButton>
            <Filter modalKey="필터모달" onApply={handleApplyFilters} />
          </S.ButtonWrap>
        </S.TitleWrap>
        <S.PostListWrap>
          <PostEntire items={noticeDatas} />
        </S.PostListWrap>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </S.Container>
      <Footer />
    </>
  );
};

export default NoticeList;
