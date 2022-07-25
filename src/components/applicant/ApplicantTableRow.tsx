import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface ApplicantTableTRProps {
  [key: string]: any;
}

function ApplicantTableRow({ user }: any) {
  const tableRowRef = React.useRef<any>();

  const handleWinStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(tableRowRef.current.outerText);
    console.log(e.target.checked);
    // axios
    //   .patch(`/db.json?users/${1}`, {
    //     win: e.target.checked,
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  return (
    <ListTableBody ref={tableRowRef}>
      <ListTableTR>
        <ListTableTD>{user.id}</ListTableTD>
        <ListTableTD>{user.date}</ListTableTD>
        <ListTableTD>{user.name}</ListTableTD>
        <ListTableTD>{user.sex}</ListTableTD>
        <ListTableTD>{user.birth}</ListTableTD>
        <ListTableTD>{user.phone}</ListTableTD>
        <ListTableTD>{user.email}</ListTableTD>
        <ListTableTD>{user.transportation}</ListTableTD>
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
