import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

function ApplicantList() {
  const [data, setData] = React.useState([]);
  const [keyList, setKeyList] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    async function getUserData() {
      const userData = await axios.get('/db.json');
      setData(userData.data.users);

      const keyData = Object.keys(userData.data.users[0]);
      setKeyList(keyData);
    }
    getUserData();
  }, []);

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
      <ListTableBody>
        {data.map((object, index) => (
          <ListTableBodyTR key={index}>
            {keyList.length > 0 &&
              keyList.map((item, index) => {
                const value = object[item];
                if (item === 'win') {
                  return (
                    <ListTableTD key={index}>
                      {object[item] ? (
                        <input type="checkbox" defaultChecked />
                      ) : (
                        <input type="checkbox" />
                      )}
                    </ListTableTD>
                  );
                }
                return <ListTableTD key={index}>{value}</ListTableTD>;
              })}
          </ListTableBodyTR>
        ))}
      </ListTableBody>
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

const ListTableBody = styled.tbody``;

const ListTableBodyTR = styled.tr`
  background: #f3f3f3;
`;

const ListTableTD = styled.td`
  padding: 2px;
`;

export default ApplicantList;
