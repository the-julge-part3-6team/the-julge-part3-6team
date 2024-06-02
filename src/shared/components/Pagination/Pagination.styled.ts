import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageItemWrapper = styled.li`
  display: inline;
  margin: 0 5px;
`;

export const PageLink = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  opacity: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  &:hover {
    background-color: #ff8d72;
    color: white;
    opacity: 1;
  }
`;

export const ActivePageLink = styled(PageLink)`
  font-weight: bold;
  background-color: #ff8d72;
  color: white;
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 10px;
  width: 40px;
  height: 40px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
