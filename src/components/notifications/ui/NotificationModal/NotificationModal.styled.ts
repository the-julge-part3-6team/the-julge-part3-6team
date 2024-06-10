import styled from 'styled-components';
import theme from '@/shared/styles/theme';

export const NotificationModalContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 368px;
  background-color: ${theme.Colors.Red[10]};
  padding: 24px 20px;
  border-radius: 10px;
  border: 1px solid #cbc9cf;
  box-shadow: 0px 2px 8px 0px rgba(120, 116, 134, 0.25);
  z-index: 3;
  box-sizing: border-box;
`;

export const NotificationModalHeader = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;
