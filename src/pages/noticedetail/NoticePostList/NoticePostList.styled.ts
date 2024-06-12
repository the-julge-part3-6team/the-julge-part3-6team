import styled from "styled-components";

export const Layout = styled.div`
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