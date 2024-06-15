import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const DeadlineButton = styled.button`
  display: flex;
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  align-items: center;
  gap: 6px;
  border-radius: 5px;
  background-color: ${theme.Colors.Gray[10]};
  color: black;
  padding: 12px;
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid ${theme.Colors.Gray[20]};
  background-color: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.div`
  border-bottom: 1px solid ${theme.Colors.Gray[20]};
  &:nth-child(4) {
    border-bottom: none;
  }
  padding: 15px 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.Colors.Gray[20]};
  }
`;
