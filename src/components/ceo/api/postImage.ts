import { apiInstance } from '@/shared/utils/axios';

export const PostImage = async (name: string) => {
  return apiInstance.post('/images', { name: 'asd' });
};
