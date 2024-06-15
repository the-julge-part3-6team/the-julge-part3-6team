import React, { useState } from 'react';
import * as S from './OwnerTable.styled';
import PrimaryBadge from './Badge/Badge';
import { replacePhoneValue } from '@/shared/utils/replacePhoneValue';
import { TableBtn } from './TableBtn/TableBtn';
import { useSearchParams } from 'next/navigation';
import { useSetApprovalStatus } from '@/models/employer/useSetApprovalStatus';

const OwnerTable = ({
  list,
  onClickEvent,
}: Pick<tableProfileStatus, 'list' | 'onClickEvent'>) => {
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
          console.log(item.item.status);
          return (
            <S.CustomTableBody className={index === 0 ? 'first' : ''}>
              <li>{item.item?.user?.item.name}</li>
              <li>{item.item?.user?.item.bio}</li>
              <li>{replacePhoneValue(item.item?.user?.item.phone)}</li>
              <li>
                {item.item.status === 'pending' ? (
                  <S.TableBtnWrap>
                    <TableBtn
                      text={'거절하기'}
                      color={'#EA3C12'}
                      onClick={() => onClickEvent(item.item.id, false)}
                    />
                    <TableBtn
                      text={'승인하기'}
                      color={'#0080FF'}
                      onClick={() => onClickEvent(item.item.id, true)}
                    />
                  </S.TableBtnWrap>
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
