import React from 'react';
import styled from 'styled-components';

import ApplicantList from '@components/applicant/ApplicantList';

function ApplicantConainer() {
  return (
    <ApplicantWrapper>
      <ApplicantList />
    </ApplicantWrapper>
  );
}

const ApplicantWrapper = styled.div`
  width: 100%;
`;

export default ApplicantConainer;
