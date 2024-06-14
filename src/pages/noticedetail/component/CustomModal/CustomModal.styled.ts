import styled from 'styled-components';
import theme from '@/shared/styles/theme';

export const CustomModalAround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
`;

export const CustomModalLayout = styled.div`
  width: 298px;
  height: 184px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background-color: ${theme.Colors.White};
  z-index: 2;
  border-radius: 8px;

  @media (max-width: 770px) {
    width: 298px;
    height: 184px;
  }
`;

export const CustomModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const CustomModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;
