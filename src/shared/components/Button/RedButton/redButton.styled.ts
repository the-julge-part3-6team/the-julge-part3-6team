import theme from '@/shared/styles/theme';
import { styled } from 'styled-components';

export const RedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  width: 100%;

  border-radius: 6px;
  background-color: ${theme.Colors.Red[50]};
  color: ${theme.Colors.White};
`;
