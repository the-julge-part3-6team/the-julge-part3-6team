import { apiInstance } from '@/shared/utils/axios';

export const postImageApi = async (name: string) => {
  return apiInstance.post('/images', { name: name });
};
