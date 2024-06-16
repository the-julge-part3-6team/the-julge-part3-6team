export const toggleDropdown = (
  setIsOpen: (key: string) => void,
  setIsClose: () => void,
  key: string,
) => {
  if (key === '드롭다운모달') {
    setIsClose();
    setIsOpen('');
  } else {
    setIsOpen('드롭다운모달');
  }
};
