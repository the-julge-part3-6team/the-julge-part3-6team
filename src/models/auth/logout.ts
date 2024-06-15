import { AUTH } from '@/constant/path';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const handleLogout = (router: any) => {
  localStorage.clear();
  cookies.remove('token', { path: '/' });

  router.push(AUTH.SIGNIN);
};
