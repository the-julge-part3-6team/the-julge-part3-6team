import { handleLogout } from '@/models/auth/logout';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';

export const Employee = () => {
  const router = useRouter();

  return (
    <>
      <li>
        <a href="/mypage">내 프로필</a>
      </li>
      <li style={{ cursor: 'pointer' }} onClick={() => handleLogout(router)}>
        로그아웃
      </li>
    </>
  );
};
