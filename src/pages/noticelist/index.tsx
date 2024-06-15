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
import { toggleDropdown } from '@/models/dropdown/toggleDropDown';
import { handleSortOptionClick } from '@/models/sort/handleSortOptionClick';
import { handleApplyFilters } from '@/models/filter/handleApplyFilters';
import { toggleFilterModal } from '@/models/modal/toggleFilterModal';

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

  const totalPages = Math.ceil(totalItems / 6);
  // 전체 페이지 설정

  return (
    <>
      <Header />
      <S.ContainerBackground>
        <S.Container>
          <S.CustomTitle>맞춤 공고</S.CustomTitle>
          <CustomPostList />
        </S.Container>
      </S.ContainerBackground>
      <S.Container>
        <S.TitleWrap>
          <S.CustomTitle>전체 공고</S.CustomTitle>
          <S.ButtonWrap>
            <SortDropdown
              isDropdownOpen={isDropdownOpen}
              order={order}
              toggleDropdown={() => toggleDropdown(setIsDropdownOpen)}
              handleSortOptionClick={(option: string, sort: string) =>
                handleSortOptionClick(
                  option,
                  sort,
                  setOrder,
                  setSort,
                  setIsDropdownOpen,
                )
              }
            />

            <S.FilterButton
              onClick={() => toggleFilterModal(isOpen, setIsOpen, setIsClose)}
            >
              상세 필터
            </S.FilterButton>
            <Filter
              modalKey="필터모달"
              onApply={filters => handleApplyFilters(filters, setFilters)}
            />
          </S.ButtonWrap>
        </S.TitleWrap>
        <S.PostListWrap>
          {renderSpinner(<PostList items={noticeDatas} />, isLoading)}
        </S.PostListWrap>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </S.Container>
      <Footer />
    </>
  );
};

export default NoticeList;
