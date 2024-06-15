import { useModal } from '@/shared/store/useModal';

export const toggleFilterModal = (
  isOpen: boolean,
  setIsOpen: (key: string) => void,
  setIsClose: () => void,
) => {
  isOpen ? setIsClose() : setIsOpen('필터모달');
};
