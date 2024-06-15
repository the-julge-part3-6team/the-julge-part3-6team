import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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

export const ViewFlexBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
  }
`;

export const HeightCon = styled.div`
  padding: 0 0 430px;

  @media (max-width: 744px) {
    padding: 0 0 120px;
  }
`;
