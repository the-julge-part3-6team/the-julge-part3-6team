import styled from 'styled-components';
import theme from '@/shared/styles/theme';

export const Toast = styled.div`
  width: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  border-radius: 5px;
  background: ${theme.Colors.Red[30]};

  color: ${theme.Colors.White};

  animation: fadeOut ease-in-out 3s;

  @keyframes fadeOut {
    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
