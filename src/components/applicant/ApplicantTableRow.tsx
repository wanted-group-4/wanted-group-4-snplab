import React from 'react';
import styled from 'styled-components';

import { patchUserWin } from '@api/adminApi';

function ApplicantTableRow({ user }: any) {
  const tableRowRef = React.useRef<HTMLTableSectionElement>(null);
  const updateWin = patchUserWin();

  const handleWinStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (tableRowRef.current) {
      const id = parseInt(tableRowRef.current.innerText.slice(0, 1));
      const win = e.target.checked;
      updateWin.mutate({ id, win });
    }
    return;
  };

  return (
    <ListTableBody ref={tableRowRef}>
      <ListTableTR>
        <ListTableTD>{user.id}</ListTableTD>
        <ListTableTD>{user.date}</ListTableTD>
        <ListTableTD>{user.name}</ListTableTD>
        <ListTableTD>{user.gender}</ListTableTD>
        <ListTableTD>{user.birth}</ListTableTD>
        <ListTableTD>{user.phone}</ListTableTD>
        <ListTableTD>{user.email}</ListTableTD>
        <ListTableTD
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          {user.transportation.join(', ')}
        </ListTableTD>
        <ListTableTD>{user.region}</ListTableTD>
        <ListTableTD>
          {user.win ? (
            <input type="checkbox" defaultChecked onChange={handleWinStatus} />
          ) : (
            <input type="checkbox" onChange={handleWinStatus} />
          )}
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
export default ApplicantTableRow;
