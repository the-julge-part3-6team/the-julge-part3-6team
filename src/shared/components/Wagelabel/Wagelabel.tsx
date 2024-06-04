import React from 'react';
import * as S from './Wagelabel.styled';
import Image from 'next/image';
import ArrowUpIcon from '@/assets/arrowup.svg';

interface WageLabelProps {
  percentage: number;
}

const WageLabel: React.FC<WageLabelProps> = ({ percentage }) => (
  <S.WageLabel>
    기존 시급보다 {percentage}%
    <Image src={ArrowUpIcon} alt="arrow-up" />
  </S.WageLabel>
);

export default WageLabel;
