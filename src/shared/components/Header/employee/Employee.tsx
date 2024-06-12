import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const Employee = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    cookies.remove('token', { path: '/' });

    router.push('/signin');
  };

  return (
    <>
      <li>
        <a href="/mypage">내 프로필</a>
      </li>
      <li style={{ cursor: 'pointer' }} onClick={handleLogout}>
        로그아웃
      </li>
    </>
  );
};
