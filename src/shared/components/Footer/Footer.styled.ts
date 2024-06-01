import theme from '@/styles/theme';
import styled from 'styled-components';

export const FooterWrap = styled.footer`
  width: 100%;
  background: ${theme.Colors.Gray[10]};
  color: ${theme.Colors.Gray[50]};
  padding: 37px 0;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 37px 32px;
  }

  @media (max-width: 744px) {
    position: relative;
    padding: 32px 20px 16px;
  }
`;

export const FooterContainer = styled.div`
  width: 964px;
  line-height: 1.625;
  margin: 0 auto;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  ul li ul {
    display: flex;
    gap: 10px;
  }

  .footer_quick_link_wrap {
    gap: 30px;
  }

  a {
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1440px) {
    width: 744px;
  }

  @media (max-width: 744px) {
    width: auto;
    min-height: 126px;

    .footer_codeit {
      position: absolute;
      left: 20px;
      bottom: 16px;
      font-size: 12px;
    }
  }
`;
