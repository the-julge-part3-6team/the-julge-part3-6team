import React from 'react';
import * as S from './ShopDetailWidget.styled';
import Image from 'next/image';
import PostPrice from '@/shared/components/Post/PostPrice/PostPrice';
import PostInform from '@/shared/components/Post/PostInform/PostInform';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import CustomModal from '../../../../components/notice/ui/noticeDetailModal/CustomModal/CustomModal';
import checkImg from '@/assets/check.svg';
import cautionImg from '@/assets/caution.svg';
import { useHandleModal } from '../../../../shared/utils/useHandleModal';
import { NoticeData } from '@/shared/types/post';
import { useModal } from '@/shared/store/useModal';
import { useRouter } from 'next/router';
import { MYPAGE } from '@/constant/path';
import { useUserQuery } from '@/models/user/useUserData';
import { postApplication } from '@/models/application/postApplication';

interface ShopDetailWidgetProps {
  noticeData?: NoticeData;
  isApplied: boolean;
  setIsApplied: (value: boolean) => void;
}

export const ShopDetailWidget = ({
  noticeData,
  isApplied,
  setIsApplied,
}: ShopDetailWidgetProps) => {
  const shop = noticeData?.item?.shop;
  const hourlyPay = noticeData?.item?.hourlyPay;
  const startsAt = noticeData?.item?.startsAt;
  const workhour = noticeData?.item?.workhour;
  const router = useRouter();
  const { setIsOpen, setIsClose } = useModal();
  const { data: userData } = useUserQuery();

  const { mutate } = postApplication(
    shop!.item.id,
    noticeData!.item.id,
    setIsOpen,
  );

  if (!shop) {
    return null;
  }

  const { applyClick, confirmCancel } = useHandleModal({
    mutate: mutate,
    setIsApplied: setIsApplied,
  });

  const modalHeader = isApplied ? (
    <>
      <Image src={checkImg} alt="체크 표시" />
      신청이 완료되었습니다.
    </>
  ) : (
    <>
      <Image src={cautionImg} alt="경고 표시" />내 프로필을 먼저 등록해주세요.
    </>
  );
  const handleApplyClick = () => {
    const isUserProfile = userData?.data?.item.phone;

    if (!isUserProfile) {
      setIsOpen('profileAlert');
    } else {
      applyClick();
    }
  };

  const handleCancelClick = () => {
    if (!isApplied) return;
  };

  const handleCancelConfirm = () => {
    confirmCancel();
    setIsApplied(false);
  };

  const handleModalConfirm = () => {
    setIsClose();
    location.reload();
  };

  console.log('isApplied', isApplied);
  return (
    <>
      <S.TextWrap>
        <S.BigText>{shop.item.name}</S.BigText>
      </S.TextWrap>

      <S.ContextWrap>
        <S.ImageContainer>
          <img src={shop.item.imageUrl} alt={shop.item.name} />
        </S.ImageContainer>

        <S.TextContainer>
          <S.SmallText>시급</S.SmallText>
          <S.PriceWrap>
            <PostPrice
              isClosed={false}
              defaultHourlyPay={Number(hourlyPay)}
              currentHourlyPay={shop.item.originalHourlyPay}
            />
          </S.PriceWrap>
          <S.WidgetWrap>
            <PostInform
              isClosed={false}
              type="시간"
              content={formatWorkTime({
                type: 'notice',
                startsAt: startsAt!,
                workHour: workhour!,
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

      <CustomModal
        modalKey="profileAlert"
        modalHeader={modalHeader}
        modalFooter={
          <div style={{ width: '80px' }}>
            <CustomButton
              text="확인"
              color="#EA3C12"
              onClick={() => {
                setIsOpen('');
                router.push(MYPAGE.CREATE);
              }}
            />
          </div>
        }
      />

      <CustomModal
        modalKey="applySuccess"
        modalHeader={
          <>
            <Image src={checkImg} alt="체크 표시" />
            신청이 완료되었습니다.
          </>
        }
        modalFooter={
          <div style={{ width: '80px' }}>
            <CustomButton
              text="확인"
              color="#EA3C12"
              onClick={handleModalConfirm}
            />
          </div>
        }
      />

      <CustomModal
        modalKey="cancelConfirm"
        modalHeader="신청을 취소하시겠어요?"
        modalFooter={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CustomButton text="취소하기" color="#EA3C12" onClick={() => {}} />
            <CustomButton
              text="확인"
              color="#EA3C12"
              onClick={handleCancelConfirm}
            />
          </div>
        }
      />
    </>
  );
};
