import { RedButton } from '@/shared/components/Button/RedButton/RedButton.styled';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 172px);

  @media (max-width: 1440px) {
    height: 100%;
  }
`;

export const ContentWrap = styled.div`
  width: 964px;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 1440px) {
    width: auto;
    padding: 60px 32px;
  }

  @media (max-width: 744px) {
    padding: 40px 20px;
  }
`;

export const MyPageHeader = styled.h2`
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 744px) {
    font-size: 20px;
  }
`;
