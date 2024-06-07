import styled from 'styled-components';
import { RedButton } from '@/shared/components/Button/RedButton/RedButton.styled';

export const PageLayout = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  top: 60px;
  width: calc(100% - 476px);
  margin: 0 auto;
  padding-bottom: 120px;

  @media (max-width: 1440px) {
    width: calc(100% - 64px);
  }

  @media (max-width: 770px) {
    width: calc(100% - 24px);
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
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SmallText = styled.h4<{ isBlack?: boolean }>`
  color: ${props => (props.isBlack ? '#000' : '#ea3c12')};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const BigText = styled.h1`
  color: var(--The-julge-black, #111322);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.56px;
  margin-bottom: 24px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  width: 346px;

  @media (max-width: 744px) {
    width: 100%;
  }
`;

export const PriceWrap = styled.div`
/* gap 왜 안먹히는지 PostPrice 보고 수정하기 */
  display: flex;
`;

export const WidgetWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 12px;
`;

export const DetailText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  margin-bottom: 14px;
`;

export const CustomRedButton = styled(RedButton)`
  width: 346px;

  @media (max-width: 744px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const DescripContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 32px;
  margin-bottom: 120px;
  border-radius: 12px;
  background: #f2f2f3;

  ${SmallText} {
    color: #000;
  }

  p {
    margin-top: 32px;
    line-height: 26px;

    &:last-of-type {
      margin-top: 0;
    }
  }
`;

export const RecentWrap = styled.div`
  margin: 60px 0 120px 0; 
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 14px;
  row-gap: 32px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
