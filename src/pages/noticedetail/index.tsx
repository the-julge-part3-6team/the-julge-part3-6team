import { useState } from 'react';
import * as S from './index.styled';
import Header from '@/shared/components/Header/Header';
import Footer from '@/shared/components/Footer/Footer';
import ShopDetailWidget from './ShopDetailWidget/ShopDetailWidget';
import DetailWidget from './DetailWidget/DetailWidget';
import RecentPostsWidget from './RecentPostsWidget/RecentPostWidget';
import { useModal } from '@/shared/store/useModal';
import { useHandleModal, HandleModalType } from './utils/useHandleModal';
import { NoticeData } from '@/shared/types/post';

const NoticeDetail = () => {
  const { key, isOpen } = useModal();
  const [isApplied, setIsApplied] = useState(false);

  // useHandleModal 훅을 사용하여 handleModal 객체를 가져옴
  const { applyClick, cancelClick, confirmCancel, closeCancelModal, confirm } = useHandleModal({ setIsApplied });

  // NoticeData는 실제 데이터로 대체되어야 함
  const noticeData = {} as NoticeData;

  if (!noticeData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <S.PageLayout>
        <S.SmallText>식당</S.SmallText>
        <ShopDetailWidget
          noticeData={noticeData}
          isApplied={isApplied}
          handleModal={{ applyClick, cancelClick, confirmCancel, closeCancelModal, confirm } as HandleModalType} // 타입 단언을 사용하여 HandleModalType으로 형 변환
        />
        <DetailWidget noticeData={noticeData} />
        <RecentPostsWidget
          isOpen={isOpen}
          key={key}
          handleModal={{ applyClick, cancelClick, confirmCancel, closeCancelModal, confirm } as HandleModalType} // 타입 단언을 사용하여 HandleModalType으로 형 변환
        />
      </S.PageLayout>
      <Footer />
    </>
  );
};

export default NoticeDetail;
