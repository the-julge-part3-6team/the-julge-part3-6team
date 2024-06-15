import styled from 'styled-components';
import { RedButton } from '@/shared/components/Button/RedButton/RedButton.styled';

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const BigText = styled.h1`
  color: var(--The-julge-black, #111322);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  margin-bottom: 24px;

  @media (max-width: 744px) {
    font-size: 20px;
  }
`;

export const ContextWrap = styled.div`
  /* max-width: 963px; */
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  padding: 24px;
  gap: 30px;
  margin-bottom: 24px;
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 744px) {
    flex-direction: column;
    padding: 20px;
    margin-bottom: 12px;
  }
`;

export const ImageContainer = styled.div`
  width: 60%;
  height: 308px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 744px) {
    width: 100%;
    height: 178px;
  }
`;

export const TextContainer = styled.div`
  width: 346px;

  @media (max-width: 744px) {
    width: 100%;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  margin: 8px 0 0;
`;

export const WidgetWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 12px;
`;

export const SmallText = styled.h4<{ isBlack?: boolean }>`
  color: ${props => (props.isBlack ? '#000' : '#ea3c12')};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const DetailText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  margin-bottom: 14px;

  @media (max-width: 744px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const CustomRedButton = styled(RedButton)`
  width: 346px;
  /* border: 1px; */
  /* font-weight: 700; */

  @media (max-width: 744px) {
    width: 100%;
    font-size: 14px;
  }
`;
