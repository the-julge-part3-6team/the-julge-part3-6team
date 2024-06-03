import styled from 'styled-components';

export const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 744px) {
    padding: 0px 20px;
  }
`;
