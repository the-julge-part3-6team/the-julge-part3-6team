import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserData } from '../store/useUserData';
import { Cookies } from 'react-cookie';
import { handleLogout } from '@/models/auth/logout';
import { AUTH, MYPAGE, MYSTORE, NOTICE } from '@/constant/path';
const cookies = new Cookies();

export const useRouterGuard = () => {
  const router = useRouter();
  const { type } = useUserData();
  const pathname = router.pathname;
  const token = cookies.get('token');

  const notSigninPath = ['/signin', '/signup'];
  const employer = [
    '/mystore',
    '/mystore/edit',
    '/mystore/create',
    '/notice/create',
    '/notice/edit',
  ];
  const employee = ['/mypage', 'mypage/edit', '/mypage/create'];

  useEffect(() => {
    if (!token && !notSigninPath.includes(pathname)) {
      router.push(AUTH.SIGNIN);
      return;
    }

    if (token && notSigninPath.includes(pathname)) {
      router.push(NOTICE.LIST);
    }

    if (token && type === 'employee' && employer.includes(pathname)) {
      router.push(MYPAGE.INDEX);
    }

    if (token && type === 'employer' && employee.includes(pathname)) {
      router.push(MYSTORE.INDEX);
    }
  }, [token, type, pathname, router]);

  return;
};
