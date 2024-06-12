import theme from '@/styles/theme';
import styled, { css } from 'styled-components';

export const ContainerBackground = styled.div`
  width: 100%;
  background-color: ${theme.Colors.Red[10]};
  padding: 1px;
`;

export const Container = styled.div`
  width: 964px;
  margin: 0 auto;

  @media (max-width: 1040px) {
    width: 638px;
  }

  @media (max-width: 744px) {
    width: 400px;
  }
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const CustomTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  margin-bottom: 32px;
`;

export const PostListWrap = styled.div`
  margin-bottom: 40px;
`;

export const FilterButton = styled.button`
  display: flex;
  height: 30px;
  padding: 12px;
  align-items: center;
  gap: 6px;
  border-radius: 5px;
  background-color: ${theme.Colors.Red[30]};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;

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

export const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
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
