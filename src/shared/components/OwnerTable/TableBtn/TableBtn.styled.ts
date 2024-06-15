import styled from 'styled-components';

export const TableBtn = styled.button`
  width: 92px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  border-radius: 6px;

  @media (max-width: 744px) {
  }
`;
