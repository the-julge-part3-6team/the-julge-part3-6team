import { apiInstance } from '@/shared/utils/axios';

export const signupApi = async (
  email: string,
  password: string,
  type: string,
) => {
  return await apiInstance.post('/users', { email, password, type });
};
