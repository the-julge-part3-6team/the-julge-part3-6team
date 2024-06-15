import { MYSTORE } from '@/constant/path';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useUpdateUserState = (
  isLoading: boolean,

  item: UserDataType,
  { setName, setPhone, setAddress, setBio }: any,
) => {
  const param = useSearchParams();
  const router = useRouter();
  const user_id = param.get('user_id');

  useEffect(() => {
    if (isLoading) return;
    if (!user_id) router.push(MYSTORE.INDEX);
    if (item.name) setName(item.name);
    if (item.phone) setPhone(item.phone);
    if (item.address) setAddress(item.address);
    if (item.bio) setBio(item.bio);
  }, [item]);
};
