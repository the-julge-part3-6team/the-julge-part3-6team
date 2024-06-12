import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserData } from '../store/useUserData';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const useRouterGuard = () => {
  const router = useRouter();
  const { type } = useUserData();
  const pathname = router.pathname;
  const token = cookies.get('token');

  const notSigninPath = ['/signin', '/signup'];
  const employer = ['/mystore', '/mystore/edit', '/mystore/create'];
  const employee = ['/mypage', 'mypage/edit', '/mypage/create'];

  useEffect(() => {
    if (!token && !notSigninPath.includes(pathname)) {
      router.push('/signin');
      return;
    }

    if (token && notSigninPath.includes(pathname)) {
      router.back();
      return;
    }

    if (token && type === 'employee' && employer.includes(pathname)) {
      router.push('/mypage');
    }

    if (token && type === 'employer' && employee.includes(pathname)) {
      router.push('/mystore');
    }
  }, [token, type, pathname, router]);

  return;
};
