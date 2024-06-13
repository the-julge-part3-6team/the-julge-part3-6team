import { useEffect } from 'react';

export const useUpdateUserState = (
  isLoading: boolean,
  user_id: string,
  router: any,
  item: UserDataType,
  { setName, setPhone, setAddress, setBio }: any,
) => {
  useEffect(() => {
    if (isLoading) return;
    if (!user_id) router.push('/mystore');
    if (item.name) setName(item.name);
    if (item.phone) setPhone(item.phone);
    if (item.address) setAddress(item.address);
    if (item.bio) setBio(item.bio);
  }, [item]);
};
