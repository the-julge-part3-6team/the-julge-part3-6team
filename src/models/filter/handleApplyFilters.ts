import { FilterState } from '@/shared/types/filterState';
import { Dispatch, SetStateAction } from 'react';

export const handleApplyFilters = (
  filters: FilterState | null,
  setFilters: Dispatch<SetStateAction<FilterState | null>>,
) => {
  setFilters(filters);
};
