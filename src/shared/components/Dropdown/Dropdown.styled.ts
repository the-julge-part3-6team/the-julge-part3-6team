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
  height: auto;
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

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectedValue = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  max-height: 150px;
  margin-top: 10px;
  z-index: 200;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
`;

export const Option = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #E5E4E7;
  cursor: pointer;
  &:hover {
    background: #f6f6f6;
  }
`;

export const UnitLabel = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: ${theme.Colors.Black};
`;

export const ScrollBar = styled.div`
  position: absolute;
  width: 4px;
  height: 63px;
  right: 4px;
  top: 12px;
`;