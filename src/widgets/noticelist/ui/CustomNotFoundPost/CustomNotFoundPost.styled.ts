import theme from '@/shared/styles/theme';
import styled from 'styled-components';

export const CustomLayout = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 15px;
  border: 1px solid ${theme.Colors.Gray[30]};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 744px) {
    height: 300px;
  }
`;
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 30px;
`;

export const CustomTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
`;

export const CustomPoint = styled.span`
  color: ${theme.Colors.Red[40]};
`;

export const CustomSubTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.Colors.Red[40]};
`;

export const CustomContent = styled.p`
  font-size: 16px;
  line-height: 19px;
`;
