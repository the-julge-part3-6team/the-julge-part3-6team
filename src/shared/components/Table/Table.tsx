import React from 'react';
import * as S from './table.styled';
import PrimaryBadge from './Badge/Badge';

interface Test {
  title: string;
  date: string;
  price: string;
  status: '대기중' | '거절' | '승인 완료';
}

const list: Test[] = [
  { title: 'hs 과일', date: '2023-01-12', price: '15,000', status: '대기중' },
  { title: 'hs 과일', date: '2023-01-12', price: '15,000', status: '거절' },
  {
    title: 'hs 과일',
    date: '2023-01-12',
    price: '15,000',
    status: '승인 완료',
  },
];

const Table = () => {
  return (
    <S.CustomTable>
      <S.CustomTableWrap>
        <S.CustomTableHeader>
          <li>가게</li>
          <li>일자</li>
          <li>시급</li>
          <li>상태</li>
        </S.CustomTableHeader>
        {list.map((item, index) => {
          return (
            <S.CustomTableBody className={index === 0 ? 'first' : ''}>
              <li>{item.title}</li>
              <li>{item.date}</li>
              <li>{item.price}</li>
              <li>
                <PrimaryBadge status={item.status} />
              </li>
            </S.CustomTableBody>
          );
        })}
      </S.CustomTableWrap>
    </S.CustomTable>
  );
};

export default Table;
