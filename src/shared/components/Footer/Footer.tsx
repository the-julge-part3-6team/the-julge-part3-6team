import React from 'react';
import * as S from './Footer.styled';
import envelopeImg from '@/assets/envelope-square.svg';
import facebookImg from '@/assets/facebook-square.svg';
import instaImg from '@/assets/instagram.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <S.FooterWrap>
      <S.FooterContainer>
        <ul>
          <li className="footer_codeit">©codeit - 2023</li>
          <li>
            <ul className="footer_quick_link_wrap">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer_img_wrap">
              <li>
                <a href="">
                  <Image src={envelopeImg} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={facebookImg} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <Image src={instaImg} alt="" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </S.FooterContainer>
    </S.FooterWrap>
  );
};

export default Footer;
