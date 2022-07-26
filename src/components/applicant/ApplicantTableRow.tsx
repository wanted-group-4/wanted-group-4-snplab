import React from 'react';
import styled from 'styled-components';

import { patchUserWin } from '@api/adminApi';

function ApplicantTableRow({ user }: any) {
  const updateWin = patchUserWin();

  const handleWinStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = user.id;
    const win = e.target.checked;
    updateWin.mutate({ id, win });
  };

  return (
    <ListTableBody>
      <ListTableTR>
        <ListTableTD>{user.id}</ListTableTD>
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

const ListTableBody = styled.tbody``;
const ListTableTR = styled.tr``;
const ListTableTD = styled.td`
  padding: 2px;
`;
const WinCheckbox = styled.input``;
export default ApplicantTableRow;
