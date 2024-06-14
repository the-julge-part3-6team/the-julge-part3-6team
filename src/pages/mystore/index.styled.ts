import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--The-julge-black, #111322);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  margin-bottom: 23px;

  @media (max-width: 1440px) {
    font-size: 24px;
  }
`;

export const MyContentWrap = styled.div`
  padding: 60px 0;
  width: 964px;
  margin: 0 auto;

  @media (max-width: 744px) {
    width: auto;
    padding: 40px 20px;
  }
`;

export const Body = styled.div`
  width: 100%;

  background: var(--The-julge-gray-05, #fafafa);
  padding-bottom: 120px;
`;
