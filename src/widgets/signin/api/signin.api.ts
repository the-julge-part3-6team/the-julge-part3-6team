import { apiInstance } from '@/shared/utils/axios';

export const signinApi = async (email: string, password: string) => {
  return await apiInstance.post('/token', { email, password });
};
