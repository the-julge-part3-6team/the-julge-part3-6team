import { validateIfEmpty } from './validateIfEmpty';

export const handleValidate = (
  { hourlyPay, startsAt, workhour, description }: CreateNotice,
  setErrors: any,
) => {
  Object.entries({ hourlyPay, startsAt, workhour, description }).forEach(
    ([key, value]) => {
      validateIfEmpty(key, value, setErrors);
    },
  );

  if (hourlyPay && startsAt && workhour && description) {
    return false;
  }
  return true;
};
