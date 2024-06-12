import React from 'react';
import { WidgetWrap, PriceWrap } from '../index.styled';
import PostInform from '@/shared/components/PostList/PostInform/PostInform';
import PostPrice from '@/shared/components/PostList/PostPrice/PostPrice';
import { formatWorkTime } from '../utils/useTimeUtils';
import { calculatePriceChange } from '../utils/usePriceUtils';

interface PostInformationProps {
  data: {
    closed: boolean;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    shop: {
      item: {
        originalHourlyPay: number;
        address1: string;
      };
    };
  };
}

const PostInformation = ({ data }: PostInformationProps) => {
  const priceChange = calculatePriceChange(
    data.shop.item.originalHourlyPay,
    data.hourlyPay,
  );
  // 수정 후 위젯으로 분리하기
  
  // return (
  //   <S.WidgetWrap>
  //     <PostInform
  //       status={data.closed ? 'closed' : 'active'}
  //       type="시간"
  //       content={formatWorkTime(data.startsAt, data.workhour)}
  //     />
  //     <PostInform
  //       status="active"
  //       type="장소"
  //       content={data.shop.item.address1}
  //     />
  //     <S.PriceWrap>
  //       <PostPrice
  //         status="active"
  //         price={data.hourlyPay}
  //         priceChange={priceChange}
  //       />
  //     </S.PriceWrap>
  //   </S.WidgetWrap>
  // );
};

export default PostInformation;
