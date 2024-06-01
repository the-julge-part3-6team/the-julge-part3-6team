import React from 'react';
import { PageItemWrapper, PageLink, ActivePageLink } from './Pagination.styled'; // 스타일 가져오기
import arrowLeftIcon from '@/assets/arrowleft.svg';
import arrowRightIcon from '@/assets/arrowright.svg'; 

interface PageItemProps {
  pageNumber: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
  totalPages: number;
}

const PageItem: React.FC<PageItemProps> = ({ pageNumber, currentPage, handlePageChange, totalPages }) => {
  const PageLinkComponent = pageNumber === currentPage ? ActivePageLink : PageLink;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <PageItemWrapper>
      {pageNumber === 1 && (
        <PageLinkComponent onClick={handlePrevPage}>
          <img src={arrowLeftIcon} alt="Previous" />
        </PageLinkComponent>
      )}
      {pageNumber === totalPages && (
        <PageLinkComponent onClick={handleNextPage}>
          <img src={arrowRightIcon} alt="Next" />
        </PageLinkComponent>
      )}
      {(pageNumber !== 1 && pageNumber !== totalPages) && (
        <PageLinkComponent onClick={() => handlePageChange(pageNumber)}>{pageNumber}</PageLinkComponent>
      )}
    </PageItemWrapper>
  );
};

export default PageItem;
