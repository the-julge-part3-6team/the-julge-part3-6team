import { dateTransfromKST } from '@/shared/utils/dateTransform';
import { handleValidate } from './handleValidate';

export const onSubmit = (notice: CreateNotice, setErrors: any, mutate: any) => {
  const hasError = handleValidate(notice, setErrors);
  if (!hasError) {
    mutate({
      hourlyPay: notice.hourlyPay,
      startsAt: dateTransfromKST(notice.startsAt),
      workhour: Number(notice.workhour),
      description: notice.description,
    });
  }
};
