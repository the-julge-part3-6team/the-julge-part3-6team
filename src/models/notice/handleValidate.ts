import { validateIfEmpty } from './validateIfEmpty';

export const handleValidate = (
  { hourlyPay, startsAt, workhour }: CreateNotice,
  setErrors: any,
) => {
  Object.entries({ hourlyPay, startsAt, workhour }).forEach(([key, value]) => {
    validateIfEmpty(key, value, setErrors);
  });

  if (hourlyPay && startsAt && workhour) {
    return false;
  }
  return true;
};
