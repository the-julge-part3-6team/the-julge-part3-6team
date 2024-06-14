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
import { dateTransfromIso } from '@/shared/utils/dateTransform';
import { renderSpinner } from '@/shared/utils/renderSpinner';

const NoticeList = () => {
  const { isOpen, setIsOpen, setIsClose } = useModal(); // 필터 모달
  const [filters, setFilters] = useState<FilterState | null>(null); // 필터 값
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 정렬 드롭다운
  const [order, setOrder] = useState('마감임박순'); // 정렬
  const [sort, setSort] = useState('time');
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 설정

  const startsAtGte = dateTransfromIso(filters?.startDate);

  const address = filters?.selectedLocations
    ?.map(selectedLocation => `address=${encodeURIComponent(selectedLocation)}`)
    .join('&');

  const { data, isLoading } = useGetNotices({
    offset: (currentPage - 1) * 6,
    limit: 6,
    sort: sort,
    hourlyPayGte: filters?.price,
    address: address,
    startsAtGte: startsAtGte,
  });

  const totalItems = data?.data?.count; // 공고 총 갯수
  const noticeDatas = data?.data?.items; // { item{}, links[] }

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // 페이지네이션 버튼 클릭했을 때, currentPage 변경
  };

  const handleApplyFilters = (filters: FilterState) => {
    setFilters(filters);
  };
  // 필터 설정

  const toggleFilterModal = () => {
    isOpen ? setIsClose() : setIsOpen('필터모달');
  };
  // 필터 모달 토글

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // 정렬 드롭다운 토글

  const handleSortOptionClick = (option: string, sort: string) => {
    setOrder(option);
    setSort(sort);
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
                  onClick={() => handleSortOptionClick('마감임박순', 'time')}
                >
                  마감 임박순
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => handleSortOptionClick('시급많은순', 'pay')}
                >
                  시급 많은순
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => handleSortOptionClick('시간적은순', 'hour')}
                >
                  시간 적은순
                </S.DropdownItem>
                <S.DropdownItem
                  onClick={() => handleSortOptionClick('가나다순', 'shop')}
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
          {renderSpinner(<PostEntire items={noticeDatas} />, isLoading)}
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
