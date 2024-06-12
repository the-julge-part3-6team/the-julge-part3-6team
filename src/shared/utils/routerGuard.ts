// import { useRouter } from 'next/router';
// import { useUserData } from '../store/useUserData';

// export const routerGuard = () => {
//   const { type } = useUserData();
//   const router = useRouter();

//   type Role = 'employee' | 'employer';

//   type RoleConfig = {
//     [path: string]: boolean;
//   };

//   // 전체 config 객체의 타입 정의
//   type Config = {
//     [role in Role]: RoleConfig;
//   };

//   const config: Config = {
//     employee: {
//       '/mypage': true,
//       '/mypage/create': true,
//       '/mypage/edit': true,
//     },
//     employer: {
//       '/mystore': true,
//       '/mystore/create': true,
//       '/mystore/edit': true,
//     },
//   };

//   if (config[type]?.[router.pathname]) {
//     router.push('/mypage');
//   }
// };
