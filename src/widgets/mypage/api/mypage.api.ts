import { useUserData } from '@/shared/store/useUserData';
import { apiInstance } from '@/shared/utils/axios';

export const myPageApi = async (
  name: string,
  phone: string,
  address: string,
  bio: string,
  user_id: string,
) => {
  return await apiInstance.put(`/users/${user_id}`, {
    name,
    phone,
    address,
    bio,
  });
};
