import React from 'react';
import * as S from './Table.styled';
import PrimaryBadge from './Badge/Badge';
import { ITable } from '@/types/table';

interface Props {
  list: ITable[];
}

const Table = ({ list }: Props) => {
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
