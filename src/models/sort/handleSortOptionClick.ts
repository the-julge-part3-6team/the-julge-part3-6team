import { Dispatch, SetStateAction } from 'react';

export const handleSortOptionClick = (
  option: string,
  sort: string,
  setOrder: Dispatch<SetStateAction<string>>,
  setSort: Dispatch<SetStateAction<string>>,
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
) => {
  setOrder(option);
  setSort(sort);
  setIsDropdownOpen(false);
};
