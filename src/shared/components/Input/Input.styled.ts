import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

interface InputFrameProps {
  hasError?: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 350px;
  height: 92px;
`;

export const InputLabel = styled.label`
  width: 45px;
  height: 26px;
  font-size: 16px;
  line-height: 26px; 
  color: ${theme.Colors.Black};
`;

export const InputFrame = styled.div<InputFrameProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 20px;
  gap: 10px;
  width: 350px;
  height: 58px;
  background: ${theme.Colors.White};
  border: 1px solid ${theme.Colors.Gray[30]};
  border-radius: 6px;
  ${(props) =>
    props.hasError &&
    css`
      border-color: ${theme.Colors.Red[40]};
    `}
`;

export const InputField = styled.input`
  width: 30px;
  height: 26px;
  font-size: 16px;
  line-height: 26px; 
  color: ${theme.Colors.Gray[40]};
`;

export const ErrorMessage = styled.div`
  width: 105px;
  height: 16px;
  font-size: 12px;
  line-height: 16px; 
  color: ${theme.Colors.Red[40]};
`;
