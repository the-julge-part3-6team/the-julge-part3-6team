// 수정중

// export const handleModal = {
//   applyClick: (
//     userData: any,
//     setIsOpen: (key: string) => void,
//     setIsApplied: (value: boolean) => void,
//   ) => {
//     if (!userData?.data.item.phone) {
//       setIsOpen('profileAlert');
//     } else {
//       setIsOpen('applySuccess');
//       setIsApplied(true);
//     }
//   },
//   cancelClick: (setIsOpen: (key: string) => void) => setIsOpen('cancelModal'),

//   confirmCancel: (
//     setIsApplied: (value: boolean) => void,
//     setIsClose: () => void,
//   ) => {
//     setIsApplied(false);
//     setIsClose();
//   },
//   closeCancelModal: (setIsClose: () => void) => setIsClose(),
//   confirm: (key: string, setIsClose: () => void, router: any) => {
//     setIsClose();
//     if (key === 'profileAlert') {
//       router.push('/mypage');
//     }
//   },
// };
