import Header from '@/shared/components/Header/Header';
import React, { useState } from 'react';
import * as S from './index.styled';
import Footer from '@/shared/components/Footer/Footer';
import Pagination from '@/shared/components/Pagination/Pagination';
import { useModal } from '@/shared/store/useModal';
import { FilterState } from '@/types/filterState';
import { useGetNotices } from './useGetNotices';
import PostEntire from '@/shared/components/Post/PostEntire/PostEntire';
import { Filter } from '@/components/filter';

const handlePageChange = (page: number) => {
  console.log(page);
};

const NoticeList = () => {
  const { isOpen, setIsOpen, setIsClose } = useModal();
  const [filters, setFilters] = useState<FilterState | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [order, setOrder] = useState('마감임박순');
  const { data, isLoading, error } = useGetNotices();

  const noticeDatas = data?.data?.items;

  const handleApplyFilters = (filters: FilterState) => {
    setFilters(filters);
  };

  const toggleFilterModal = () => {
    if (isOpen) {
      setIsClose();
    } else {
      setIsOpen('필터모달');
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortOptionClick = (option: string) => {
    setOrder(option);
    setIsDropdownOpen(false);
  };

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
          currentPage={1}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      </S.Container>
      <Footer />
    </>
  );
};

export default NoticeList;
