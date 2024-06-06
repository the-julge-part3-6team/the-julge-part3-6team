import styled from 'styled-components';

export const Description = styled.p`
  color: var(--The-julge-black, #111322);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const MyStoreContent = styled.div`
  border-radius: 12px;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  padding: 60px 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrap = styled.div`
  width: 346px;

  @media (max-width: 744px) {
    width: 150px;
  }
`;

// export const Title = styled.h1`
// `
