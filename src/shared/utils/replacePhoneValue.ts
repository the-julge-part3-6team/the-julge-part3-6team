export const replacePhoneValue = (phone?: string) => {
  if (phone!.length >= 14) {
    return phone?.slice(0, 13);
  }

  const cleaned = phone?.replace(/\D/g, '');
  const formatted = cleaned?.replace(
    /(\d{3})(\d{4})(\d{4})/,
    (_, p1, p2, p3) => {
      if (p3) {
        return `${p1}-${p2}-${p3}`;
      } else if (p2) {
        return `${p1}-${p2}`;
      } else if (p1) {
        return p1;
      }
      return '';
    },
  );
  return formatted;
};
