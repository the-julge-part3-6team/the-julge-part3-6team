import React from 'react';
import * as S from './OwnerTable.styled';
import PrimaryBadge from './Badge/Badge';
import { replacePhoneValue } from '@/shared/utils/replacePhoneValue';
import { TableBtn } from './TableBtn/TableBtn';

const OwnerTable = ({ list }: Pick<tableProfileStatus, 'list'>) => {
  return (
    <S.CustomTable>
      <S.CustomTableWrap>
        <S.CustomTableHeader>
          <li>신청자</li>
          <li>소개</li>
          <li>전화번호</li>
          <li>상태</li>
        </S.CustomTableHeader>
        {list?.map((item: any, index: any) => {
          return (
            <S.CustomTableBody className={index === 0 ? 'first' : ''}>
              <li>{item.item?.user?.item.name}</li>
              <li>{item.item?.user?.item.bio}</li>
              <li>{replacePhoneValue(item.item?.user?.item.phone)}</li>
              <li>
                {item.item.status === 'pending' ? (
                  <TableBtn text={'asd'} />
                ) : (
                  <PrimaryBadge status={item.item.status} />
                )}
              </li>
            </S.CustomTableBody>
          );
        })}
      </S.CustomTableWrap>
    </S.CustomTable>
  );
};

export default OwnerTable;
