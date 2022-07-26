import React from 'react';
import styled from 'styled-components';

import { IAdmin } from '@type/models/user';
import ApplicantTableRow from '@src/components/applicant/ApplicantTableRow';
import { titleList } from '@src/constants/admin';

interface IApplicantList {
  userList: IAdmin[];
}

function ApplicantList({ userList }: IApplicantList) {
  return (
    <ListTable>
      <ListTableHead>
        <ListTableHeadTR>
          {titleList.map((item: string, index: number) => (
            <ListTableTH key={index}>{item}</ListTableTH>
          ))}
        </ListTableHeadTR>
      </ListTableHead>
      {userList &&
        userList.map((user: IAdmin, index: number) => (
          <ApplicantTableRow key={index} user={user} num={index} />
        ))}
    </ListTable>
  );
}

const ListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
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
  white-space: nowrap;

  :not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.color.grey_01};
  }

  :first-of-type {
    width: 1%;
    white-space: nowrap;
  }
`;

export default ApplicantList;
