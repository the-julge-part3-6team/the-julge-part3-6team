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
import NotificationModal, {
  Notifications,
} from '@/shared/components/NotificationModal/NotificationModal';
import Input from '@/shared/components/Input/Input';
import Header from '@/shared/components/Header/Header';

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
  const { isToast, setOpenToast } = useToast();

  const toggleNotificationModal = () => {
    if (isOpen) {
      setIsClose();
    } else {
      setIsOpen('알림모달');
    }
  };

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
      <Footer />
      {isToast && <Toast text="삭제 되었습니다." />}
      <hr />
      <Input label={'이메일'} type={'email'} />
      <hr />
      <Input label={'비밀번호'} type={'password'} />
      <hr />
      <Input label={'시급*'} type={'hourlyWage'} />
      <hr />
      <Input
        label={'분류*'}
        type={'dropdown'}
        options={[
          '서울시 종로구',
          '서울시 중구',
          '서울시 용산구',
          '서울시 성동구',
          '서울시 광진구',
          '서울시 동대문구',
          '서울시 중랑구',
          '서울시 성북구',
          '서울시 강북구',
          '서울시 도봉구',
          '서울시 노원구',
          '서울시 은평구',
          '서울시 서대문구',
          '서울시 마포구',
          '서울시 양천구',
          '서울시 강서구',
          '서울시 구로구',
          '서울시 금천구',
          '서울시 영등포구',
          '서울시 동작구',
          '서울시 관악구',
          '서울시 서초구',
          '서울시 강남구',
          '서울시 송파구',
          '서울시 강동구',
        ]}
      />
      <hr />
    </>
  );
};

export default index;
