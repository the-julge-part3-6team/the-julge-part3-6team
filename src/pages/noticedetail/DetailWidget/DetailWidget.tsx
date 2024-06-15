import React from 'react';
import * as S from './DetailWidget.styled';
import { NoticeData } from '@/shared/types/post'; 

// description 출력 안되는 이슈 해결하기
interface DetailWidgetProps {
  noticeData: NoticeData;
}

const DetailWidget = ({ noticeData }: DetailWidgetProps) => {
  return (
    <>
      <S.DescripContainer>
        <S.SmallText isBlack>공고 설명</S.SmallText>
        <p>{/* 공백 */}</p>
        <p>{noticeData.item?.description}</p>
      </S.DescripContainer>
    </>
  );
};

export default DetailWidget;
