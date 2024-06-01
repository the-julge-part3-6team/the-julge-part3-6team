import styled from 'styled-components';
import theme from '@/styles/theme';

interface OptionsContainerProps {
  width?: number | null;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const InputFrame = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
  gap: 10px;
  width: 100%;
  height: 58px;
  background: ${theme.Colors.White};
  border: 1px solid ${theme.Colors.Gray[30]};
  border-radius: 5px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectedValue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;

  .dropdown-arrow {
    position: absolute;
    margin-left: 295px;
    // margin-right: 21px가 안먹혀서 임의로 지정함 (추후 수정 필요)
    cursor: pointer;
  }

  &.open .dropdown-arrow {
    transform: rotate(180deg);
  }
`;

export const OptionsContainer = styled.div<OptionsContainerProps>`
  position: absolute;
  width: calc(100% + 40px);
  // InputContainer와 width 동일하게 맞추기 위함 (추후 수정 필요)
  max-height: 230px;
  z-index: 200;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  top: 100%;
  left: 0;
  margin-top: 30px;
  // (추후 수정 필요)
  margin-left: -20px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 63px;
    background: transparent;
    right: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #7d7986;
    border-radius: 40px 0 0 40px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &:hover::-webkit-scrollbar-thumb {
    opacity: 1;
  }

  &::-webkit-scrollbar-thumb:vertical {
    height: 63px;
  }
`;

export const Option = styled.div`
  height: 46px;
  padding: 0 12px;
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
