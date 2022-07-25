import React from 'react';
import styled from 'styled-components';

import { IUser } from '@type/models/user';
import ApplicantTableRow from '@src/components/applicant/ApplicantTableRow';

interface IApplicantList {
  userList: IUser[];
  keyList: string[];
}

interface IUserObject {
  [key: string]: any;
}

function ApplicantList({ userList, keyList }: IApplicantList) {
  const titleList: string[] = [
    'Num.',
    '지원날짜',
    '지원자명',
    '성별',
    '생년월일',
    '연락처',
    '이메일',
    '이용수단',
    '거주지',
    '당첨여부',
  ];

  return (
    <ListTable>
      <ListTableHead>
        <ListTableHeadTR>
          {titleList.map((item, index) => (
            <ListTableTH key={index}>{item}</ListTableTH>
          ))}
        </ListTableHeadTR>
      </ListTableHead>
      {userList.map((user: IUserObject, index: number) => (
        <ApplicantTableRow key={index} user={user} />
      ))}
    </ListTable>
  );
}

const ListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
`;

const ListTableHead = styled.thead`
  position: sticky;
  font-weight: 600;
  z-index: 100;
`;

const ListTableHeadTR = styled.tr`
  background: #f3f3f3;
`;

const ListTableTH = styled.th`
  padding: 5px;
  text-transform: capitalize;

  :not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.color.grey_01};
  }

  :first-of-type {
    width: 1%;
    white-space: nowrap;
  }
`;

export default ApplicantList;
