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

export const ModalHeader = styled.div`
  color: var(--black-black_333236, #333236);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 70px;

  @media (max-width: 770px) {
    margin-top: 55px;
  }
`;

export const ModalFooter = styled.div`
  width: 70%;
`;
