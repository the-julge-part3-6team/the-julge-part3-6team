import { handleLogout } from '@/models/auth/logout';
import { useRouter } from 'next/router';

export const Employer = () => {
  const router = useRouter();

  return (
    <>
      <li>
        <a href="/mystore">내 가게</a>
      </li>
      <li style={{ cursor: 'pointer' }} onClick={() => handleLogout(router)}>
        로그아웃
      </li>
    </>
  );
};
