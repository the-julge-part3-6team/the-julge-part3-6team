import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const CustomTable = styled.div`
  width: 100%;
  background: ${theme.Colors.White};
  min-height: 338px;
  border-radius: 10px;

  @media (max-width: 744px) {
    overflow-x: scroll;
  }
`;

export const CustomTableHeader = styled.ul`
  display: grid;
  grid-template-columns: 23.5% 31% 21% 24.5%;
  background: ${theme.Colors.Red[10]};
  font-size: 14px;
  li {
    padding: 14px 12px;
  }
  @media (max-width: 744px) {
    position: relative;
    font-size: 12px;
    li:nth-child(1) {
      position: sticky;
      left: 0;
      background: ${theme.Colors.Red[10]};
      order: 1;
    }
    li:nth-child(2) {
      order: 4;
    }
    li:nth-child(3) {
      order: 3;
    }
    li:nth-child(4) {
      order: 2;
    }
  }
`;

export const CustomTableBody = styled.ul`
  display: grid;
  grid-template-columns: 23.5% 31% 21% 24.5%;
  align-items: center;

  border-bottom: 1px solid ${theme.Colors.Gray[20]};
  font-size: 16px;
  background-color: ${theme.Colors.White};
  &.first {
    border-top: 1px solid ${theme.Colors.Gray[20]};
  }

  li {
    padding: 19px 12px;
  }

  @media (max-width: 744px) {
    position: relative;
    font-size: 14px;
    li:nth-child(1) {
      order: 1;
      position: sticky;
      left: 0;
      background: ${theme.Colors.White};
    }
    li:nth-child(2) {
      order: 4;
    }
    li:nth-child(3) {
      order: 3;
    }
    li:nth-child(4) {
      order: 2;
    }
  }
`;

export const CustomTableWrap = styled.div`
  @media (max-width: 744px) {
    width: 200%;
  }
`;

export const TableBtnWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;
