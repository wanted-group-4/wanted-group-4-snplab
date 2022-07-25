import React, { useState } from 'react';
import styled from 'styled-components';

import Search from '@components/admin/search/Search';
import Download from '@components/admin/Download';
import ApplicantContainer from '@components/applicant/ApplicantContainer';

export interface IFilter {
  type: string;
  condition: string | string[];
}

export default function Admin() {
  const [filter, setFilter] = useState<IFilter>();
  const [round, setRound] = useState<number>(1);

  const handleFilter = (value: IFilter) => {
    setFilter(value);
  };

  const data = [
    { name: '지혜인', gender: 'female', birth: '1998.01.01' },
    { name: '지혜인', gender: 'female', birth: '1998.01.01' },
  ];
  return (
    <>
      <AdminContainer>
        <Title>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</Title>
        <SearchContainer>
          <Search handleFilter={handleFilter} />
          <Download data={data} />
        </SearchContainer>
      </AdminContainer>
      <ApplicantContainer />
    </>
  );
}

const AdminContainer = styled.div``;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
