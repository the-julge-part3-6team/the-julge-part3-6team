import React from 'react';
import * as S from './ShopDetailWidget.styled';
import Image from 'next/image';
import PostPrice from '@/shared/components/Post/PostPrice/PostPrice';
import PostInform from '@/shared/components/Post/PostInform/PostInform';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import CustomModal from '../component/CustomModal/CustomModal';
import checkImg from '@/assets/check.svg';
import cautionImg from '@/assets/caution.svg';
import { useHandleModal } from '../utils/useHandleModal';
import { NoticeData } from '@/shared/types/post';

interface ShopDetailWidgetProps {
  noticeData?: NoticeData; 
  isApplied: boolean;
  setIsApplied: (value: boolean) => void;
}

const ShopDetailWidget = ({
  noticeData,
  isApplied,
  setIsApplied,
}: ShopDetailWidgetProps) => {
  const shop = noticeData?.data?.item?.shop;
  const hourlyPay = noticeData?.data?.item?.hourlyPay;
  const startsAt = noticeData?.data?.item?.startsAt;
  const workhour = noticeData?.data?.item?.workhour;

  if (!shop) {
    return null;
  }

  const { applyClick, cancelClick, confirmCancel, closeCancelModal, confirm } =
    useHandleModal({
      setIsApplied: setIsApplied,
    });

  const modalHeader = isApplied ? (
    <>
      <Image src={checkImg} alt="체크 표시" />
      신청이 완료되었습니다.
    </>
  ) : (
    <>
      <Image src={cautionImg} alt="경고 표시" />
      내 프로필을 먼저 등록해주세요.
    </>
  );

  const handleApplyClick = () => {
    applyClick();
  };

  const handleCancelClick = () => {
    cancelClick();
  };

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
              defaultHourlyPay={hourlyPay}
              currentHourlyPay={shop.item.originalHourlyPay}
            />
          </S.PriceWrap>
          <S.WidgetWrap>
            <PostInform
              isClosed={false}
              type="시간"
              content={formatWorkTime({
                type: 'notice',
                startsAt,
                workHour: workhour
              })}
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
                onClick={handleCancelClick}
                color="#EA3C12"
                text="취소하기"
              />
            </div>
          ) : (
            <S.CustomRedButton onClick={handleApplyClick}>
              신청하기
            </S.CustomRedButton>
          )}
        </S.TextContainer>
      </S.ContextWrap>

      {isApplied && (
        <CustomModal
          modalKey="applySuccess"
          modalHeader={modalHeader}
          modalFooter={
            <div style={{ width: '80px' }}>
              <CustomButton text="확인" color="#EA3C12" onClick={confirm} />
            </div>
          }
        />
      )}
    </>
  );
};

export default ShopDetailWidget;
