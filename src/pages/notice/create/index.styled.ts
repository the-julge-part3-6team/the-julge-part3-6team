import theme from '@/styles/theme';
import styled from 'styled-components';

export const BodyWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${theme.Colors.Gray[5]};
`;

export const Body = styled.div`
  display: flex;
  padding: 60px 0px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 964px;

  @media (max-width: 1440px) {
    width: auto;
    padding: 60px 24px;
  }

  @media (max-width: 770px) {
    padding: 60px 24px;
  }
`;

export const Title = styled.h1`
  color: ${theme.Colors.Black};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  width: 100%;
  text-align: left;
`;

export const ButtonWrap = styled.div`
  width: 336px;
`;
