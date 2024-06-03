import { apiInstance } from '@/shared/utils/axios';

export const getUserApi = async (user_id: string) => {
  return apiInstance.get(`/users/${user_id}`);
};
