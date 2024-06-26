import { useState } from 'react';
import * as S from '../index.styled';
import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import { useGetNoticeDetail } from '@/models/notice/useGetNoticeDetail';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import {
  DetailTable,
  ShopDetailWidget,
  DetailWidget,
} from '@/widgets/noticedetail';

const NoticeDetailCeo = () => {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get('shop_id');
  const notice_id = searchParams.get('notice_id');

  const [isApplied, setIsApplied] = useState(false);

  const { data: noticeData, isLoading: noticeLoading } = useGetNoticeDetail(
    shop_id || '',
    notice_id || '',
  );

  const combinedParams = {
    shop_id: shop_id,
    notice_id: notice_id,
  };

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.TextWrap>
          <S.SmallText>식당</S.SmallText>
        </S.TextWrap>
        {renderSpinner(
          <ShopDetailWidget
            noticeData={noticeData?.data}
            isApplied={isApplied}
            setIsApplied={setIsApplied}
          />,
          noticeLoading,
        )}
        <DetailWidget noticeData={noticeData?.data} />
        <DetailTable params={combinedParams} />
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetailCeo;
