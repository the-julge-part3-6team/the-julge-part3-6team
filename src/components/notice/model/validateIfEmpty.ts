export const validateIfEmpty = (
  key: string,
  name: string | number,
  setError: any,
) => {
  if (!name) {
    setError((prev: any) => {
      return {
        ...prev,
        [key]: '필수적으로 입력해야 하는 값입니다.',
      };
    });
  } else {
    setError((prev: any) => {
      return {
        ...prev,
        [key]: '',
      };
    });
  }
};
