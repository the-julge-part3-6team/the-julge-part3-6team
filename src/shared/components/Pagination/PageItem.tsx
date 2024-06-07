import React from 'react';
import { PageItemWrapper, PageLink, ActivePageLink } from './Pagination.styled';

interface PageItemProps {
  pageNumber: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const PageItem = ({
  pageNumber,
  currentPage,
  handlePageChange,
}: PageItemProps) => {
  const PageLinkComponent =
    pageNumber === currentPage ? ActivePageLink : PageLink;

  return (
    <PageItemWrapper>
      <PageLinkComponent onClick={() => handlePageChange(pageNumber)}>
        {pageNumber}
      </PageLinkComponent>
    </PageItemWrapper>
  );
};

export default PageItem;
