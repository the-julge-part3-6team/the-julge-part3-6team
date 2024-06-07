import { handleValidate } from './handleValidate';

export const handleSubmit = (
  {
    name,
    category,
    address1,
    address2,
    imageUrl,
    originalHourlyPay,
    description,
  }: Omit<Store, 'id'>,
  mutate: any,
  setErrors: any,
) => {
  const hasError = handleValidate(
    {
      name,
      category,
      address1,
      address2,
      imageUrl,
      originalHourlyPay: Number(originalHourlyPay),
    },
    setErrors,
  );

  if (!hasError) {
    mutate({
      name,
      category,
      address1,
      address2,
      description,
      imageUrl,
      originalHourlyPay: Number(originalHourlyPay),
    });
  }
};
