import React from 'react';
import PageItem from './PageItem';
import { PaginationWrapper } from './Pagination.styled'; 

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  const pagesToShow = Math.min(totalPages, 7);
  const pageNumbers = Array.from({ length: pagesToShow }, (_, index) => index + 1);

  return (
    <PaginationWrapper>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <PageItem
            key={pageNumber}
            pageNumber={pageNumber}
            currentPage={currentPage}
            handlePageChange={handlePageChange} totalPages={7} />
        ))}
      </ul>
    </PaginationWrapper>
  );
};

export default Pagination;
