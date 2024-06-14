import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 31px;
  border-radius: 12px;
  padding: 24px;
  background: ${theme.Colors.Red[10]};

  @media (max-width: 770px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ImageWrap = styled.div`
  width: 60%;
  height: 308px;
  position: relative;

  img {
    border-radius: 12px;
  }

  @media (max-width: 770px) {
    width: 100%;
    height: auto;
    aspect-ratio: 16 /9;
  }
`;

export const StoreInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    color: var(--The-julge-primary, #ea3c12);
    font-size: 16px;
    font-weight: 700;
    line-height: 20px; /* 125% */
  }

  @media (max-width: 744px) {
    width: 100%;
    gap: 9px;
  }
`;

export const StoreName = styled.p`
  color: ${theme.Colors.Black};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;

  @media (max-width: 744px) {
    font-size: 24px;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    color: ${theme.Colors.Gray[50]};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px; /* 162.5% */

    @media (max-width: 744px) {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

export const Description = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */

  @media (max-width: 744px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: auto;
  gap: 8px;
  width: 100%;

  @media (max-width: 744px) {
    margin-top: 16px;
  }
`;
