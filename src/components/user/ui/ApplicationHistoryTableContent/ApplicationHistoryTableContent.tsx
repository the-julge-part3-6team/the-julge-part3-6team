import Table from '@/shared/components/Table/Table';
import * as S from './ApplicationHistoryTableContent.styled';

export const ApplicationHistoryTableContent = ({
  list,
}: tableProfileStatus) => {
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <S.ViewFlexBox>
            <S.MyPageHeader>내 프로필</S.MyPageHeader>
            <Table list={list} />
          </S.ViewFlexBox>
        </S.ContentWrap>
      </S.Container>
    </>
  );
};
