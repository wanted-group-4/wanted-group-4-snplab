import React from 'react';
import styled from 'styled-components';

import Search from '@src/components/admin/search/Search';
import Download from '@src/components/admin/Download';

import ApplicantContainer from '@src/components/applicant/ApplicantContainer';

export default function Admin() {
  return (
    <>
      <AdminContainer>
        <Title>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</Title>
        <Wrap>
          <Search />
          <Download />
        </Wrap>
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

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
