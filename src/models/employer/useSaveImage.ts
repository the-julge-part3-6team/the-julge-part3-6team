import { putImageByS3 } from '@/components/ceo/api/putImageByS3';
import { useMutation } from '@tanstack/react-query';

export const useSaveImage = () => {
  const mutation = useMutation(putImageByS3);
  const mutateSaveImage = (data: { file: File; url: string }) =>
    mutation.mutateAsync(data);

  return { mutateSaveImage };
};
