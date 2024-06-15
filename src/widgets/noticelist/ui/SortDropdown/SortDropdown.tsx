import React from 'react';
import * as S from './SortDropdown.styled';

interface Props {
  isDropdownOpen: boolean;
  order: string;
  toggleDropdown: () => void;
  handleSortOptionClick: (option: string, sort: string) => void;
}

export const SortDropdown = ({
  isDropdownOpen,
  order,
  toggleDropdown,
  handleSortOptionClick,
}: Props) => (
  <>
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
  </>
);
