import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  width: 100%;
  height: 64px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  position: relative;
  left: 28px;
  top: 406px;
`;

export const PageItemWrapper = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
  padding: 0px;
  gap: 20px;
  margin: 0 auto;
  max-width: 372px; 
  height: 40px;
`;

export const PageLink = styled.a`
  min-width: 40px; 
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #111322;
  cursor: pointer;

  &:hover {
    background-color: #FF8D72;
    color: #FFFFFF;
  }
`;

export const ActivePageLink = styled(PageLink)`
  background-color: #FF8D72;
  color: #FFFFFF;
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 2px;
  list-style: none;
  padding: 0;
  width: min-content; 
  height: min-content; 
  opacity: 0; 
`;
