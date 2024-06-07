import { RedButton } from '@/shared/components/Button/RedButton/RedButton.styled';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 665px;
  padding: 32px;
  box-sizing: border-box;
  background: ${theme.Colors.Red[10]};
  border-radius: 12px;

  p {
    margin: 28px 0 0;
  }

  @media (max-width: 1440px) {
    margin: 24px 0 0;
    width: auto;
  }

  @media (max-width: 744px) {
    margin: 16px 0 0;
  }
`;

export const ProfileNameBox = styled.dl`
  dt {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.25;
    color: #ea3c12;
  }
  dd {
    font-size: 28px;
    font-weight: 700;
    color: ${theme.Colors.Black};
    margin: 8px 0 0;
  }
`;

export const ProfileDetailBox = styled.ul`
  color: ${theme.Colors.Gray[50]};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.625;
  margin: 12px 0 0;
  li {
    margin: 12px 0 0;
    &:first-child {
      margin: 0;
    }
  }
`;

export const MyPageBox = styled.div`
  display: flex;
  padding: 60px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border: 1px solid ${theme.Colors.Gray[20]};
  border-radius: 12px;
  margin: 24px 0 0;

  @media (max-width: 744px) {
    gap: 16px;
    margin: 16px 0 0;
  }

  p {
    color: ${theme.Colors.Black};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.625; /* 162.5% */

    @media (max-width: 744px) {
      font-size: 14px;
      line-height: 1.57143; /* 157.143% */
    }
  }
`;

export const CustomRedButton = styled(RedButton)`
  width: 336px;

  @media (max-width: 744px) {
    width: 150px;
    font-size: 14px;
  }
`;

export const MyPageHeader = styled.h2`
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 744px) {
    font-size: 20px;
  }
`;
