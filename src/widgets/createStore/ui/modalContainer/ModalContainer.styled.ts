import styled from 'styled-components';

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
