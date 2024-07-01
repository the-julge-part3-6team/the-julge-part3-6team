import styled from 'styled-components';

export const SmallText = styled.h4<{ isBlack?: boolean }>`
  color: ${props => (props.isBlack ? '#000' : '#ea3c12')};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 8px;

  @media (max-width: 744px) {
    font-size: 14px;
  }
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

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
`;

export const PageNationWrap = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 12px 0;
`;
