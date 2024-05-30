import theme from '@/styles/theme';
import styled from 'styled-components';

export const GrayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0;
  width: 100%;

  border-radius: 6px;
  background-color: ${theme.Colors.Gray[40]};
  color: ${theme.Colors.White};
`;
