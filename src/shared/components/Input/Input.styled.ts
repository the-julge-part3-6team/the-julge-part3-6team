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
  width: 100%;
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  color: ${theme.Colors.Black};
`;

export const InputFrame = styled.div<InputFrameProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 10px;
  width: 350px;
  height: 58px;
  background: ${theme.Colors.White};
  border: 1px solid ${theme.Colors.Gray[30]};
  border-radius: 5px;
  ${props =>
    props.hasError &&
    css`
      border-color: ${theme.Colors.Red[40]};
    `}
`;

export const InputField = styled.input`
  width: 100%;
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  color: ${theme.Colors.Black};
  border: none;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const SelectField = styled.select`
  width: 100%;
  height: 26px;
  font-size: 16px;
  line-height: 26px;
  color: ${theme.Colors.Black};
  border: none;
  outline: none;
  background: ${theme.Colors.White};
  appearance: none; 
`;

export const Option = styled.option`
  position: absolute;
  width: 318px;
  padding: 0;
  margin-top: 10px;
  z-index: 200;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  overflow-y: auto; 
  
  &:hover {
    background: #f6f6f6;
  }
`;

export const UnitLabel = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: ${theme.Colors.Black};
`;

export const ErrorMessage = styled.div`
  width: 100%;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: ${theme.Colors.Red[40]};
`;
