import React from 'react';
import * as S from './ShopDetailWidget.styled';
import PostPrice from '@/shared/components/Post/PostPrice/PostPrice';
import PostInform from '@/shared/components/Post/PostInform/PostInform';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import { NoticeData } from '@/shared/types/post';

interface ShopDetailWidgetProps {
  noticeData?: any;
  isApplied: boolean;
  handleModal: {
    cancelClick: () => void;
    applyClick: () => void;
  };
}

const ShopDetailWidget = ({
  noticeData,
  isApplied,
  handleModal,
}: ShopDetailWidgetProps) => {
  if (!noticeData || !noticeData.data || !noticeData.data.item || !noticeData.data.item.shop) {
    return null;
  }

  const { shop } = noticeData.data.item;

  return (
    <>
      <S.TextWrap>
        <S.BigText>{shop.item.name}</S.BigText>
      </S.TextWrap>

      <S.ContextWrap>
        <S.ImageContainer>
          <img
            src={shop.item.imageUrl}
            alt={shop.item.name}
          />
        </S.ImageContainer>

        <S.TextContainer>
          <S.SmallText>시급</S.SmallText>
          <S.PriceWrap>
            <PostPrice
              isClosed={false}
              defaultHourlyPay={noticeData.data.item.hourlyPay}
              currentHourlyPay={shop.item.originalHourlyPay}
            />
          </S.PriceWrap>
          <S.WidgetWrap>
            <PostInform
              isClosed={false}
              type="시간"
              content={formatWorkTime(
                noticeData.data.item.startsAt,
                noticeData.data.item.workhour,
              )}
            />
            <PostInform
              isClosed={false}
              type="장소"
              content={shop.item.address1}
            />
          </S.WidgetWrap>
          <S.DetailText>
            <p>{shop.item.description}</p>
          </S.DetailText>
          {isApplied ? (
            <div style={{ width: '346px' }}>
              <CustomButton
                onClick={handleModal.cancelClick}
                color="#EA3C12"
                text="취소하기"
              />
            </div>
          ) : (
            <S.CustomRedButton onClick={handleModal.applyClick}>
              신청하기
            </S.CustomRedButton>
          )}
        </S.TextContainer>
      </S.ContextWrap>
    </>
  );
};

export default ShopDetailWidget;
