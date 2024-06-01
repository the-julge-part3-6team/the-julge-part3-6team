import { RedButton } from '@/shared/components/Button/RedButton/RedButton.styled';
import theme from '@/styles/theme';
import styled from 'styled-components';

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
`;
