import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const GrayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  width: 100%;
  font-weight: 700;

  border-radius: 6px;
  background-color: ${theme.Colors.Gray[40]};
  color: ${theme.Colors.White};
`;
