import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const Employer = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    cookies.remove('token', { path: '/' });

    router.push('/signin');
  };

  return (
    <>
      <li>
        <a href="/mystore">내 가게</a>
      </li>
      <li style={{ cursor: 'pointer' }} onClick={handleLogout}>
        로그아웃
      </li>
    </>
  );
};
