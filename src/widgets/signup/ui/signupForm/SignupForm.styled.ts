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

export const ModalHeader = styled.div`
  color: var(--black-black_333236, #333236);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  margin-top: 70px;

  @media (max-width: 770px) {
    margin-top: 55px;
  }
`;

export const ModalFooter = styled.div`
  width: 70%;
`;
