import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const TableBtn = styled.button`
  width: 92px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.Colors.Red};
  color: ${theme.Colors.Red};

  @media (max-width: 744px) {
  }
`;
