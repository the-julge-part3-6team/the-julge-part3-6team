export const toggleFilterModal = (
  setIsOpen: (key: string) => void,
  setIsClose: () => void,
  key: string,
) => {
  if (key === '필터모달') {
    setIsClose();
    setIsOpen('');
  } else {
    setIsOpen('필터모달');
  }
};
