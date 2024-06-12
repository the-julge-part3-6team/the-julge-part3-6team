import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: 14.85% 44% auto;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 32px;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 744px) {
    padding: 16px 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    & > *:nth-child(1) {
      width: 82px;
      height: 15px;
      order: 1;
    }

    & > *:nth-child(2) {
      order: 3;
      grid-column: span 2;
    }

    & > *:nth-child(3) {
      order: 2;
      font-size: 14px;

      img {
        display: flex;
      }
    }
  }
`;

export const AuthContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: end;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 700;
  color: ${theme.Colors.Black};

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
  }
  @media (max-width: 744px) {
    gap: 16px;
  }
`;

export const CustomTableWrap = styled.div`
  @media (max-width: 744px) {
    width: 200%;
  }
`;
