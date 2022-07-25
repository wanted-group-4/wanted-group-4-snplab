import React from 'react';
import styled from 'styled-components';

import ApplicantList from '@components/applicant/ApplicantList';

function ApplicantConainer() {
  const [userList, setUserList] = React.useState([]);
  const [keyList, setKeyList] = React.useState<Array<string>>([]);
  const [filterUserList, setFilterUserList] = React.useState([]);

  const userListFilter = () => {
    return setFilterUserList(userList);
  };

  return (
    <ApplicantWrapper>
      <ApplicantOrder onClick={userListFilter}>1차 모집</ApplicantOrder>
      <ApplicantList userList={filterUserList} keyList={keyList} />
    </ApplicantWrapper>
  );
}

const ApplicantWrapper = styled.div`
  width: 100%;
  height: 70vh;
  background: #f3f3f3;
  border: 1px solid red;
`;

const ApplicantOrder = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  cursor: pointer;
`;

export default ApplicantConainer;
