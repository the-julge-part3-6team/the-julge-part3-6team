import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import GrayButton from '@/shared/components/Button/GrayButton/GrayButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';

const index = () => {
  return (
    <>
      <RedButton text="로그인 하기" />
      <hr />
      <GrayButton text="신청 불가" />
      <hr />
      <CustomButton text="여기에 text를 넣어주세요" color="#EA3C12" />
      <div>asdas</div>
    </>
  );
};

export default index;
