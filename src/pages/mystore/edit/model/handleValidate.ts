import { validateIfEmpty } from './validateIfEmpty';

export const handleValidate = (
  {
    name,
    category,
    address1,
    address2,
    imageUrl,
    originalHourlyPay,
  }: Omit<Store, 'id' | 'description'>,
  setErrors: any,
) => {
  Object.entries({
    name,
    category,
    address1,
    address2,
    imageUrl,
    originalHourlyPay: originalHourlyPay,
  }).forEach(([key, value]) => {
    validateIfEmpty(key, value, setErrors);
  });

  if (
    name &&
    category &&
    address1 &&
    address2 &&
    imageUrl &&
    originalHourlyPay
  ) {
    return false;
  }
  return true;
};
