import theme from '@/styles/theme';
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
    height: 176px;
  }
`;

export const StoreInfo = styled.div`
  width: 40%;
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 12px;

  h2 {
    color: var(--The-julge-primary, #ea3c12);
    font-size: 16px;
    font-weight: 700;
    line-height: 20px; /* 125% */
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const StoreName = styled.p`
  color: ${theme.Colors.Black};
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
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
  }
`;

export const Description = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: auto;
  gap: 8px;
  width: 100%;

  @media (max-width: 770) {
    margin-top: 24px;
  }
`;
