import styled from 'styled-components';
import theme from '@/styles/theme';

export const WageLabel = styled.button`
  width: 159px;
  height: 36px;
  border-radius: 20px;
  border-color: none;
  background: #ea3c12;
  color: ${theme.Colors.White};
  gap: 4px;

  /* "마감 완료" 로직 생기면 그에 따른 css 처리 */
`;
