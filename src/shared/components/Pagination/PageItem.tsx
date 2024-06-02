import React from 'react';
import { PageItemWrapper, PageLink, ActivePageLink } from './Pagination.styled';

interface PageItemProps {
  pageNumber: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const PageItem: React.FC<PageItemProps> = ({
  pageNumber,
  currentPage,
  handlePageChange,
}) => {
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
