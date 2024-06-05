import { useMutation } from '@tanstack/react-query';
import { postImageApi } from '../api/postImage';

export const useCreatePresignedUrl = () => {
  const mutation = useMutation(postImageApi);
  const mutatePresignedUrl = (name: string) => mutation.mutateAsync(name);
  return { mutatePresignedUrl };
};
