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
  justify-content: space-between; /* 내부 요소를 오른쪽으로 정렬 */
  cursor: pointer;

  .dropdown-arrow {
    margin-right: 21px; /* 오른쪽으로 이동 */
  }

  &.open .dropdown-arrow {
    transform: rotate(180deg);
  }
`;

export const OptionsContainer = styled.div<OptionsContainerProps>`
  position: absolute;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  max-height: 230px;
  z-index: 200;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  overflow-y: auto;
  top: 100%; /* 입력 컨테이너의 하단에 배치 */
  left: 0; /* 입력 컨테이너의 왼쪽에 정렬 */
  margin-top: 8px;
`;

export const Option = styled.div`
  height: 46px;
  padding: 8px 16px;
  border-bottom: 1px solid #e5e4e7;
  text-align: center;
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
