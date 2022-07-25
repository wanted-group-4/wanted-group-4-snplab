import React from 'react';
import styled from 'styled-components';

import ApplicantList from '@components/applicant/ApplicantList';

function ApplicantConainer() {
  const [roundIsActive, setRoundIsActive] = React.useState<number>(0);
  const [keyList, setKeyList] = React.useState<Array<string>>([]);
  const [filterUserList, setFilterUserList] = React.useState([]);

  const handleRoundClick = (index: number) => {
    setRoundIsActive(index);
  };

  const userListFilter = (index: number) => {
    handleRoundClick(index);
    return;
  };

  const roundList: number[] = [1, 2];

  return (
    <ApplicantWrapper>
      <RoundWrapper>
        {roundList.map((item, index) => (
          <ApplicantOrder
            style={{
              backgroundColor: roundIsActive === index ? '#f3f3f3' : 'white',
            }}
            onClick={() => userListFilter(index)}
            key={index}
          >{`${index + 1}차 모집`}</ApplicantOrder>
        ))}
      </RoundWrapper>
      <ApplicantList userList={filterUserList} keyList={keyList} />
    </ApplicantWrapper>
  );
}

const ApplicantWrapper = styled.div`
  width: 100%;
  height: 70vh;
  background: #f3f3f3;
`;

const RoundWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ApplicantOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  height: 60px;
  cursor: pointer;
`;

export default ApplicantConainer;
