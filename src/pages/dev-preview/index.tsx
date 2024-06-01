import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import GrayButton from '@/shared/components/Button/GrayButton/GrayButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import Modal from '@/shared/components/Modal/Modal';
import { useModal } from '@/shared/store/useModal';
import testImg from '@/assets/caution.svg';
import Image from 'next/image';
import Toast from '@/shared/components/Toast/Toast';
import { useToast } from '@/shared/store/useToast';
import Table from '@/shared/components/Table/Table';
import Input from '@/shared/components/Input/Input';
import Pagination from '@/shared/components/Pagination/Pagination';

const index = () => {
  const { setIsOpen } = useModal();
  const { isToast, setOpenToast } = useToast();

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
      <button onClick={setIsOpen} style={{ background: 'red' }}>
        클릭하면 모달이 나타납니다
      </button>
      <Modal
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
      <button onClick={setOpenToast} style={{ background: 'pink' }}>
        누르면 토스트가 나타납니다
      </button>
      {isToast && <Toast text="삭제 되었습니다." />}
      <Table />
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
      <Pagination currentPage={1} totalPages={10} onPageChange={(page: any) => console.log(page)} />
    </>
  );
};

export default index;
