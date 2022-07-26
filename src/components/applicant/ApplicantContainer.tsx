import React from 'react';
import styled from 'styled-components';

import ApplicantList from '@components/applicant/ApplicantList';
import { getRoundList } from '@api/adminApi';

interface IApplicantProps {
  userList: object[];
  setRound: React.Dispatch<React.SetStateAction<number>>;
  curRound: number;
}

function ApplicantConainer({ userList, setRound, curRound }: IApplicantProps) {
  const round = getRoundList().data;
  const userListFilter = (index: number) => {
    setRound(index + 1);
  };

  return (
    <ApplicantWrapper>
      <RoundWrapper>
        {round &&
          round.map((_, index) => (
            <ApplicantOrder
              style={{
                backgroundColor: curRound - 1 === index ? '#f3f3f3' : 'white',
              }}
              onClick={() => userListFilter(index)}
              key={index}
            >{`${index + 1}차 모집`}</ApplicantOrder>
          ))}
      </RoundWrapper>
      <ApplicantList userList={userList} />
    </ApplicantWrapper>
  );
}

const ApplicantWrapper = styled.div`
  width: 80vw;
  height: 60vh;
  background: ${({ theme }) => theme.color.grey_03};
  overflow-x: auto;
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
