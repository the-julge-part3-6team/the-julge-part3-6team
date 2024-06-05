import { useMutation } from '@tanstack/react-query';
import { putImageByS3 } from '../api/putImageByS3';

export const useSaveImage = () => {
  const mutation = useMutation(putImageByS3);
  const mutateSaveImage = (data: { file: File; url: string }) =>
    mutation.mutateAsync(data);

  return { mutateSaveImage };
};
