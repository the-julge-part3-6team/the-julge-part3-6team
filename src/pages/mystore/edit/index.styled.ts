import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--The-julge-black, #111322);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  margin-bottom: 23px;
`;

export const MyStoreContentWrap = styled.div`
  padding: 60px 0;
  width: 964px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    width: auto;
    padding: 60px 20px;
  }
`;

export const Body = styled.div`
  width: 100%;
  background: var(--The-julge-gray-05, #fafafa);
  padding-bottom: 60px;
`;

export const ButtonCotainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ButtonWrap = styled.div`
  width: 336px;
`;
