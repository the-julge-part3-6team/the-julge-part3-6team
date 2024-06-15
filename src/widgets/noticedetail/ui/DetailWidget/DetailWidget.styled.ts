import styled from 'styled-components';

export const SmallText = styled.h4<{ isBlack?: boolean }>`
  color: ${props => (props.isBlack ? '#000' : '#ea3c12')};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  @media (max-width: 744px) {
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

  @media (max-width: 744px) {
    margin-bottom: 80px;

    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
