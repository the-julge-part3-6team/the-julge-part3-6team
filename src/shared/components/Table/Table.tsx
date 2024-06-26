import React from 'react';
import * as S from './Table.styled';
import PrimaryBadge from './Badge/Badge';
import { formatNumberWithCommas } from '@/shared/utils/formatNumberWithCommas';
import formatWorkTime from '@/shared/utils/formatWorkTime';

const Table = ({ list }: Pick<tableProfileStatus, 'list'>) => {
  return (
    <S.CustomTable>
      <S.CustomTableWrap>
        <S.CustomTableHeader>
          <li>가게</li>
          <li>일자</li>
          <li>시급</li>
          <li>상태</li>
        </S.CustomTableHeader>
        {list.map((item: any, index: any) => {
          return (
            <S.CustomTableBody className={index === 0 ? 'first' : ''}>
              <li>{item.item?.shop?.item.name}</li>
              <li>
                {formatWorkTime({
                  type: 'notice',
                  startsAt: item?.item.notice.item.startsAt,
                  workHour: item?.item.notice.item.workhour,
                })}
              </li>
              <li>
                {formatNumberWithCommas(
                  Number(item?.item.notice.item.hourlyPay),
                )}
                원
              </li>
              <li>
                <PrimaryBadge status={item.item.status} />
              </li>
            </S.CustomTableBody>
          );
        })}
      </S.CustomTableWrap>
    </S.CustomTable>
  );
};

export default Table;
