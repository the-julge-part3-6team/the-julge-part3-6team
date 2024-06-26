import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { NoticeData } from '@/shared/types/post';
import PostCard from '@/shared/components/Post/PostCard/PostCard';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import * as S from './CustomPostList.styled';
import 'swiper/css';
import styles from './CustomPostList.module.css'; // CSS 모듈 import
import { useUserData } from '@/shared/store/useUserData';
import { useGetCustomNotices } from '@/models/notice/useGetCustomNotices';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import { CustomNotFoundPost } from '../CustomNotFoundPost/CustomNotFoundPost';

SwiperCore.use([Autoplay]);

export const CustomPostList = () => {
  const { address } = useUserData();
  const { data, isLoading } = useGetCustomNotices({ address });
  const customDatas = data?.data?.items;

  const postList =
    address && customDatas && customDatas.length > 0 ? (
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={14}
        breakpoints={{
          1040: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2000, // 슬라이드 변경 간격 (밀리초)
          disableOnInteraction: false, // 사용자 인터랙션 후에도 자동 재생 유지
        }}
        loop={true}
      >
        {customDatas.map(renderPostCard)}
      </Swiper>
    ) : (
      <CustomNotFoundPost />
    );

  return <>{renderSpinner(postList, isLoading)}</>;
};

const renderPostCard = (customData: NoticeData) => {
  const {
    id: notice_id,
    hourlyPay,
    startsAt,
    workhour,
    closed,
    shop,
  } = customData.item;

  if (closed) return null;

  const {
    id: shop_id,
    name,
    address1,
    imageUrl,
    originalHourlyPay,
  } = shop.item;
  const formattedWorkTime = formatWorkTime({
    type: 'notice',
    startsAt,
    workHour: workhour,
  });
  const currentHourlyPay = Number(hourlyPay);

  return (
    <SwiperSlide key={notice_id} className={styles['swiper-slide']}>
      <S.StyledSwiperSlide>
        <PostCard
          startsAt={startsAt}
          notice_id={notice_id}
          shop_id={shop_id}
          imageUrl={imageUrl}
          shopName={name}
          duration={formattedWorkTime}
          address={address1}
          defaultHourlyPay={originalHourlyPay}
          currentHourlyPay={currentHourlyPay}
          isClosed={closed}
        />
      </S.StyledSwiperSlide>
    </SwiperSlide>
  );
};
