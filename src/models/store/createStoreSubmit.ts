import { handleValidate } from '@/models/store/handleValidate';

export const handleSubmit = (store: Store, setErrors: any, mutate: any) => {
  const {
    id,
    name,
    category,
    address1,
    address2,
    description,
    imageUrl,
    originalHourlyPay,
  } = store;

  const hasError = handleValidate(
    {
      name,
      category,
      address1,
      address2,
      imageUrl,
      originalHourlyPay,
    },
    setErrors,
  );
  if (!hasError) {
    mutate({
      id: id,
      name,
      category,
      address1,
      address2,
      description,
      imageUrl,
      originalHourlyPay,
    });
  }
};
