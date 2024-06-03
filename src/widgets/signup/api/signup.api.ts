import { apiInstance } from '@/shared/utils/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

export const signupApi = async (
  email: string,
  password: string,
  type: string,
) => {
  return await apiInstance.post('/users', { email, password, type });
};
