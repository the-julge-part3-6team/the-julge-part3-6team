import Table from '@/shared/components/Table/Table';
import * as S from './ApplicationHistoryTableContent.styled';
import Pagination from '@/shared/components/Pagination/Pagination';

export const ApplicationHistoryTableContent = ({
  list,
  handlePageChange,
  currentPage,
  totalPages,
}: tableProfileStatus) => {
  return (
    <>
      <S.Container>
        <S.ContentWrap>
          <div>
            <S.MyPageHeader>내 프로필</S.MyPageHeader>
            <Table list={list} />
            <S.PageNationWrap>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </S.PageNationWrap>
          </div>
        </S.ContentWrap>
      </S.Container>
    </>
  );
};
