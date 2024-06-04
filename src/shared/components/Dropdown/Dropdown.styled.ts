import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

interface InputFrameProps {
  width?: string;
}

interface DropdownArrowProps {
  isOpen: boolean;
}

interface OptionsContainerProps {
  width?: string;
}

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const InputFrame = styled.div<InputFrameProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 58px;
  background: ${theme.Colors.White};
  border: 1px solid ${theme.Colors.Gray[30]};
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  width: 100%;
`;

export const SelectedValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  padding: 16px 20px;
`;

export const DropdownArrow = styled.div<DropdownArrowProps>`
  position: absolute;
  right: 20px;

  ${props =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const OptionsContainer = styled.div<OptionsContainerProps>`
  position: absolute;
  width: 100%;
  max-height: 230px;
  z-index: 200;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  left: 0;
  top: 0;
  transform: translateY(30%);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7d7986;
    background-clip: padding-box;
    border-radius: 40px;
    border: 2px solid transparent;
    padding: 10px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }
`;

export const Option = styled.div`
  height: 46px;
  border-bottom: 1px solid #e5e4e7;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #f6f6f6;
  }
`;

export const UnitLabel = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: ${theme.Colors.Black};
`;
