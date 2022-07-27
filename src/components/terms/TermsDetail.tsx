import React from 'react';
import styled from 'styled-components';
import { personalInfoConsentPolicy } from '@assets/privacy_information_consent_form';
import { MdKeyboardArrowLeft } from 'react-icons/md';

interface TermsProps {
  title: string;
  handleTermsModalToggle: (value: string) => void;
}

const TermsTitle = {
  terms1: {
    title: '개인(신용)정보',
    subTitle: ' 처리방침에 대한 동의안내',
  },
  terms2: {
    title: '제3자',
    subTitle: ' 정보제공에 대한 동의안내',
  },
};

export default function TermsDetail({
  title,
  handleTermsModalToggle,
}: TermsProps) {
  return (
    <TermsDetailContainer>
      <TermsDetailHeader>
        <ICon onClick={() => handleTermsModalToggle(title)}>
          <MdKeyboardArrowLeft size={18} />
        </ICon>
        <h2>서비스 이용약관</h2>
      </TermsDetailHeader>
      <TermsDetailWrap>
        <Title>
          <h2>{TermsTitle[title].title}</h2>
          <h3>{TermsTitle[title].subTitle}</h3>
        </Title>
        <Content
          dangerouslySetInnerHTML={{ __html: personalInfoConsentPolicy }}
        />
      </TermsDetailWrap>
    </TermsDetailContainer>
  );
}

const TermsDetailContainer = styled.div`
  width: 100%;
  background: white;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
`;

const TermsDetailHeader = styled.div`
  width: 100%;
  position: relative;
  padding: 15px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_04};
  h2 {
    font-weight: 700;
  }
`;

const ICon = styled.div`
  position: absolute;
  top: 13px;
  left: 5px;
  cursor: pointer;
`;

const TermsDetailWrap = styled.div`
  padding: 30px 20px;
`;

const Title = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 24px;
  }
`;

const Content = styled.div`
  padding: 30px 0;
`;
