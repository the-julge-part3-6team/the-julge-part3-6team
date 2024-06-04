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

export const CustomRedButton = styled(RedButton)`
  width: 336px;

  @media (max-width: 744px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const CreateForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 32px 0 0;
  }
`;

export const CreateFormUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 24px;
  margin: 32px 0 0;

  li:nth-child(4) {
    grid-column: span 3;
  }

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);

    li:nth-child(4) {
      grid-column: span 2;
    }
  }

  @media (max-width: 744px) {
    grid-template-columns: 1fr;

    li:nth-child(4) {
      grid-column: span 1;
    }
  }
`;
