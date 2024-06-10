import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin: 0 0 8px;
  color: ${theme.Colors.Black};
`;

export const TextAreaT = styled.textarea`
  width: 100%;
  min-height: 153px;
  resize: none;
  border: 1px solid ${theme.Colors.Gray[30]};
  padding: 16px 20px;
  border-radius: 5px;
  box-sizing: border-box;
`;
