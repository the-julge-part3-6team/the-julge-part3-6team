import Header from '@/shared/components/Header/Header';
import React, { useState } from 'react';
import * as S from './index.styled';
import Footer from '@/shared/components/Footer/Footer';
import Pagination from '@/shared/components/Pagination/Pagination';
import { useModal } from '@/shared/store/useModal';
import { useGetNotices } from '../../models/notice/useGetNotices';
import { Filter } from '@/components/filter';
import { FilterState } from '@/shared/types/filterState';
import { dateTransfromKST } from '@/shared/utils/dateTransform';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import PostList from '@/shared/components/Post/PostList/PostList';
import { CustomPostList, SortDropdown } from '@/widgets/noticelist';

const NoticeList = () => {
  const { isOpen, setIsOpen, setIsClose } = useModal(); // 필터 모달
  const [filters, setFilters] = useState<FilterState | null>(null); // 필터 값
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 정렬 드롭다운
  const [order, setOrder] = useState('마감임박순'); // 정렬
  const [sort, setSort] = useState('time');
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 설정

  const startsAtGte = dateTransfromKST(filters?.startDate!);

  const address = filters?.selectedLocations
    ?.map(selectedLocation => `address=${encodeURIComponent(selectedLocation)}`)
    .join('&');

  const { data, isLoading } = useGetNotices({
    offset: (currentPage - 1) * 6,
    limit: 6,
    sort: sort,
    hourlyPayGte: filters?.price,
    address: address,
    startsAtGte: startsAtGte ? `&startsAtGte=${startsAtGte}` : '',
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
          {renderSpinner(<CustomPostList items={noticeDatas} />, isLoading)}
        </S.Container>
      </S.ContainerBackground>
      <S.Container>
        <S.TitleWrap>
          <S.CustomTitle>전체 공고</S.CustomTitle>
          <S.ButtonWrap>
            <SortDropdown
              isDropdownOpen={isDropdownOpen}
              order={order}
              toggleDropdown={toggleDropdown}
              handleSortOptionClick={handleSortOptionClick}
            />

            <S.FilterButton onClick={toggleFilterModal}>
              상세 필터
            </S.FilterButton>
            <Filter modalKey="필터모달" onApply={handleApplyFilters} />
          </S.ButtonWrap>
        </S.TitleWrap>
        <S.PostListWrap>
          {renderSpinner(<PostList items={noticeDatas} />, isLoading)}
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
