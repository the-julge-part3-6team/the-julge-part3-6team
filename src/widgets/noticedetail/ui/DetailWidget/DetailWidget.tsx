import React from 'react';
import * as S from './DetailWidget.styled';
import { NoticeData } from '@/shared/types/post';

interface DetailWidgetProps {
  noticeData?: NoticeData;
}

const DetailWidget = ({ noticeData }: DetailWidgetProps) => {
  const description = noticeData?.data?.item?.description;
  return (
    <>
      <S.DescripContainer>
        <S.SmallText isBlack>공고 설명</S.SmallText>
        <p>{/* 공백 */}</p>
        <p>{description}</p>
      </S.DescripContainer>
    </>
  );
};

export default DetailWidget;
