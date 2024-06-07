import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import GrayButton from '@/shared/components/Button/GrayButton/GrayButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import Modal from '@/shared/components/Modal/Modal';
import { useModal } from '@/shared/store/useModal';
import testImg from '@/assets/caution.svg';
import notificationImg from '@/assets/notification.svg';
import Image from 'next/image';
import Toast from '@/shared/components/Toast/Toast';
import { useToast } from '@/shared/store/useToast';
import Table from '@/shared/components/Table/Table';
import { ITable } from '@/types/table';
import Footer from '@/shared/components/Footer/Footer';
import NotificationModal from '@/components/notifications/ui/NotificationModal/NotificationModal';
import { Notifications } from '@/types/notification';
import Filter from '@/components/filter/ui/Filter';
import Header from '@/shared/components/Header/Header';
import Pagination from '@/shared/components/Pagination/Pagination';
import { ChangeEvent, useState } from 'react';
import { FilterState } from '@/types/filterState';
import { PostContent } from '@/types/post';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import PostList from '@/shared/components/PostList/PostList';

const handlePageChange = (page: number) => {
  console.log(page);
};

const postList: PostContent[] = [
  {
    status: 'active',
    title: '도토리 식당',
    date: '2023-01-02 15:00~18:00 (3시간)',
    location: '서울시 송파구',
    price: 15000,
    priceChange: 100,
  },
  {
    status: 'closed',
    title: '잇타이 플러스',
    date: '2023-01-02 15:00~18:00 (3시간)',
    location: '수원시 팔달구',
    price: 7000,
    priceChange: 30,
  },
  {
    status: 'expired',
    title: '할머니 국수',
    date: '2023-01-02 15:00~18:00 (3시간)',
    location: '성남시 수정구',
    price: 1500,
    priceChange: 10,
  },
];

const list: ITable[] = [
  { title: 'hs 과일', date: '2023-01-12', price: '15,000', status: '대기중' },
  { title: 'hs 과일', date: '2023-01-12', price: '15,000', status: '거절' },
  {
    title: 'hs 과일',
    date: '2023-01-12',
    price: '15,000',
    status: '승인 완료',
  },
];

const notifications: Notifications[] = [
  {
    id: 1,
    title: 'HS 과일주스',
    date: '2023-01-14 15:00~18:00',
    status: 'approved',
    timeAgo: '1분 전',
  },
  {
    id: 2,
    title: '써니 브런치 레스토랑',
    date: '2023-01-14 15:00~18:00',
    status: 'approved',
    timeAgo: '3분 전',
  },
  {
    id: 3,
    title: '수리 에스프레소 샵',
    date: '2023-01-14 15:00~18:00',
    status: 'rejected',
    timeAgo: '7분 전',
  },
];

const index = () => {
  const { isOpen, setIsOpen, setIsClose } = useModal();
  const { setOpenToast } = useToast();
  const [filters, setFilters] = useState<FilterState | null>(null);

  const handleApplyFilters = (filters: FilterState) => {
    setFilters(filters);
  };

  const toggleNotificationModal = () => {
    if (isOpen) {
      setIsClose();
    } else {
      setIsOpen('알림모달');
    }
  };

  const toggleFilterModal = () => {
    if (isOpen) {
      setIsClose();
    } else {
      setIsOpen('필터모달');
    }
  };

  // textarea
  const [value, setValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  // textarea

  return (
    <>
      <RedButton
        text="로그인 하기"
        onClick={() => {
          console.log('login');
        }}
      />
      <hr />
      <GrayButton text="신청 불가" onClick={() => console.log('fail')} />
      <hr />
      <CustomButton
        text="여기에 text를 넣어주세요"
        color="#EA3C12"
        onClick={() => console.log('text')}
      />
      <hr />
      <button
        onClick={() => setIsOpen('거절모달')}
        style={{ background: 'red' }}
      >
        클릭하면 모달이 나타납니다
      </button>
      <Modal
        modalKey="거절모달"
        modalHeader={
          <>
            <Image src={testImg} alt="경고 표시" />
            <p>신청을 거절하시겠어요?</p>
          </>
        }
        modalFooter={
          <>
            <div style={{ width: '80px' }}>
              <CustomButton
                onClick={() => console.log('아니오')}
                text="아니오"
                color="#EA3C12"
              />
            </div>
            <div style={{ width: '80px' }}>
              <RedButton onClick={() => console.log('예')} text="예" />
            </div>
          </>
        }
      />
      <hr />
      <button
        onClick={() => setOpenToast('삭제 되었습니다.')}
        style={{ background: 'pink' }}
      >
        누르면 "삭제되었습니다." 토스트가 나타납니다
      </button>
      <button
        onClick={() => setOpenToast('두 번째 입니다.')}
        style={{ background: 'green' }}
      >
        누르면 "두 번째 입니다." 토스트가 나타납니다
      </button>
      <Toast text="삭제 되었습니다." />
      <Toast text="두 번째 입니다." />
      <Table list={list} />
      <Header />
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '100px',
          position: 'relative',
        }}
      >
        <button onClick={toggleNotificationModal}>
          <Image src={notificationImg} alt="알림 아이콘" />
        </button>
        <NotificationModal modalContents={notifications} modalKey="알림모달" />
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '100px',
          position: 'relative',
        }}
      >
        <button
          style={{
            display: 'flex',
            padding: '12px',
            alignItems: 'center',
            borderRadius: '5px',
            backgroundColor: '#FF8D72',
            color: '#fff',
            fontWeight: '700',
          }}
          onClick={toggleFilterModal}
        >
          상세 필터
        </button>
        <Filter modalKey="필터모달" onApply={handleApplyFilters} />
      </div>
      {filters && (
        <div>
          <p>선택된 시작일: {filters.startDate?.toLocaleDateString()}</p>
          <p>
            선택된 금액:
            {filters.price ? ` ${filters.price}원 이상` : ' 설정되지 않음'}
          </p>
          <p>선택된 위치: {filters.selectedLocations.join(', ')}</p>
        </div>
      )}
      <hr />
      <PostList postList={postList} />
      <hr />
      <Footer />
      <hr />
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={handlePageChange}
      />
      <hr />
      <Textarea
        id="bio"
        name="bio"
        placeholder="입력"
        label="소개"
        value={value}
        onChange={onChangeValue}
      />
      <hr />
    </>
  );
};

export default index;
