import styled from 'styled-components';

export const DropDownLayout = styled.div`
  position: relative;
`;

export const DropDownInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  height: 50px;
  padding: 12px 16px;
  gap: 10px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-sizing: border-box;
  background: #ffffff;
  font-size: 16px;
  cursor: pointer;

  &::placeholder {
    color: #555555;
  }

  .dropdown-arrow {
    margin-left: 10px;
  }
`;

export const DropDownItemList = styled.div`
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
`;

export const DropDownItem = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropDownItemHover = styled.li`
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 16px;
  transition: background-color 0.3s;
  &:hover {
    background: #f6f6f6;
  }
`;
