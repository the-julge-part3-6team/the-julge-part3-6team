import { Dispatch, SetStateAction } from 'react';

export const toggleDropdown = (
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
) => {
  setIsDropdownOpen((prev: boolean) => !prev);
};
