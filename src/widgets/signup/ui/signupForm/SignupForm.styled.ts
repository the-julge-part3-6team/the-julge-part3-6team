import theme from '@/styles/theme';
import styled from 'styled-components';

export const SignupFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 350px;

  @media (max-width: '744px') {
    width: 100%;
  }
`;

export const TypeSelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  color: ${theme.Colors.Black};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.32px;
`;
