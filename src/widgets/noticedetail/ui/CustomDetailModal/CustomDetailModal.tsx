// import React from 'react';
// import { ModalContainer } from '@/widgets/createNotice/ui/Modalcontainer/ModalContainer';
// import {
//   ModalFooter,
//   ModalHeader,
// } from '@/shared/components/Modal/Modal.styled';

// interface CustomDetailModalProps {
//   isOpen: boolean;
//   modalKey: string;
//   modalHeader: React.ReactNode;
//   modalFooter: React.ReactNode;
//   onClose: () => void;
// }

// const CustomDetailModal: React.FC<CustomDetailModalProps> = ({
//   isOpen,
//   modalKey,
//   modalHeader,
//   modalFooter,
//   onClose,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <ModalContainer>
//       <ModalContent>
//         <ModalHeader>{modalHeader}</ModalHeader>
//         <ModalFooter>{modalFooter}</ModalFooter>
//       </ModalContent>
//       <ModalBackground onClick={onClose} />
//     </ModalContainer>
//   );
// };

// export default CustomDetailModal;
