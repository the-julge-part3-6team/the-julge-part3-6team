import React from 'react';
import { PageItemWrapper, PageLink, ActivePageLink } from './Pagination.styled';

interface PageItemProps {
  pageNumber: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const PageItem = ({ pageNumber, currentPage, onPageChange }: PageItemProps) => {
  const PageLinkComponent =
    pageNumber === currentPage ? ActivePageLink : PageLink;

  return (
    <PageItemWrapper>
      <PageLinkComponent onClick={() => onPageChange(pageNumber)}>
        {pageNumber}
      </PageLinkComponent>
    </PageItemWrapper>
  );
};

export default PageItem;
