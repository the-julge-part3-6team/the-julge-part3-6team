import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { NoticeData } from '@/shared/types/post';
import NotFoundPost from '@/shared/components/Post/NotFoundPost/NotFoundPost';
import PostCard from '@/shared/components/Post/PostCard/PostCard';
import formatWorkTime from '@/shared/utils/formatWorkTime';
import * as S from './CustomPostList.styled';
import 'swiper/css';
import styles from './CustomPostList.module.css'; // CSS 모듈 import

SwiperCore.use([Autoplay]);

interface Props {
  items?: NoticeData[];
}

export const CustomPostList = ({ items }: Props) => {
  return (
    <>
      {items && items.length > 0 ? (
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
          {items.map(item => {
            const {
              id: notice_id,
              hourlyPay,
              startsAt,
              workhour,
              description,
              closed,
              shop,
            } = item.item;

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
          })}
        </Swiper>
      ) : (
        <NotFoundPost />
      )}
    </>
  );
};
