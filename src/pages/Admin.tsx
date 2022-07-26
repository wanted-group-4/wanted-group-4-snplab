import React, { useState } from 'react';
import styled from 'styled-components';

import Search from '@components/admin/search/Search';
import Download from '@components/admin/Download';
import ApplicantContainer from '@components/applicant/ApplicantContainer';
import useAdminQueries from '@src/hooks/useAdminQueries';
import { IFilter } from '@type/models/filter';

export default function Admin() {
  const [filter, setFilter] = useState<IFilter>({
    type: 'select',
    condition: '',
  });
  const [round, setRound] = useState<number>(1);

  const { data } = useAdminQueries(filter, round);

  const handleFilter = (value: IFilter) => {
    setFilter(value);
  };

  return (
    <>
      <AdminContainer>
        <Title>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</Title>
        <SearchContainer>
          <Search handleFilter={handleFilter} />
          <Download data={data} />
        </SearchContainer>
      </AdminContainer>
      <ApplicantContainer
        userList={data}
        setRound={setRound}
        curRound={round}
      />
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
