import React from 'react';
import styled from 'styled-components';

import { patchUserWin } from '@api/adminApi';
import { IAdmin } from '@type/models/user';

interface ApplicationTableRowProps {
  user: IAdmin;
  num: number;
}

function ApplicantTableRow({ user, num }: ApplicationTableRowProps) {
  const updateWin = patchUserWin();
  const handleWinStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = user.id;
    const win = e.target.checked;
    updateWin.mutate({ id, win });
  };

  return (
    <ListTableBody>
      <ListTableTR>
        <ListTableTD>{num + 1}</ListTableTD>
        <ListTableTD>{user.date}</ListTableTD>
        <ListTableTD>{user.name}</ListTableTD>
        <ListTableTD>{user.gender}</ListTableTD>
        <ListTableTD>{user.birth}</ListTableTD>
        <ListTableTD>{user.phone}</ListTableTD>
        <ListTableTD>{user.email}</ListTableTD>
        <ListTableTD>{user.transportation.join(', ')}</ListTableTD>
        <ListTableTD>{user.region}</ListTableTD>
        <ListTableTD>
          <WinCheckbox
            type="checkbox"
            defaultChecked={user.win}
            onChange={handleWinStatus}
          />
        </ListTableTD>
      </ListTableTR>
    </ListTableBody>
  );
}

const ListTableBody = styled.tbody`
  height: 25px;
`;
const ListTableTR = styled.tr``;
const ListTableTD = styled.td`
  vertical-align: middle;
  padding: 2px;
  white-space: nowrap;
`;
const WinCheckbox = styled.input``;

export default ApplicantTableRow;
