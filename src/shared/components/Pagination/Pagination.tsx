import React from 'react';
import PageItem from './PageItem';
import { PaginationWrapper, ArrowButton } from './Pagination.styled';
import Image from 'next/image';
import arrowLeftIcon from '@/assets/arrowleft.svg';
import arrowRightIcon from '@/assets/arrowright.svg';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  let startPage = Math.max(1, currentPage - 3);
  const endPage = Math.min(totalPages, startPage + 6);

  if (endPage - startPage < 6) {
    startPage = Math.max(1, endPage - 6);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <PaginationWrapper>
      <ArrowButton onClick={handlePrevPage} disabled={currentPage === 1}>
        <Image src={arrowLeftIcon} alt="arrow-left" />
      </ArrowButton>
      <ul>
        {pageNumbers.map(pageNumber => (
          <PageItem
            key={pageNumber}
            pageNumber={pageNumber}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      </ul>
      <ArrowButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <Image src={arrowRightIcon} alt="arrow-right" />
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
