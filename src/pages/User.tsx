import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

import TermsDetail from '@components/terms/TermsDetail';
import { IField } from '@src/types/models/form';
import { checkValid } from '@src/utils/checkValid';

const TERMS1 = 'terms1';
const TERMS2 = 'terms2';

const transportList = [
  '버스',
  '지하철',
  '택시',
  'KTX/기차',
  '도보',
  '자전거',
  '전동킥보드',
  '자가용',
];
const fields = [
  'round',
  'name',
  'gender',
  'birth',
  'region',
  'phone',
  'email',
  'transportation',
  'win',
];

export default function User() {
  const [isClickTerms1, setIsClickTerms1] = useState(false);
  const [isClickTerms2, setIsClickTerms2] = useState(false);
  const termsAllRef = useRef<HTMLInputElement>(null);
  const term1Ref = useRef<HTMLInputElement>(null);
  const term2Ref = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState({
    name: { message: '', done: false, value: '' },
    gender: { message: '', done: false, value: '' },
    birth: { message: '', done: false, value: '' },
    region: { message: '', done: false, value: '' },
    phone: { message: '', done: false, value: '' },
    email: { message: '', done: false, value: '' },
    transportation: { message: '', done: false, value: '' },
    terms: { message: '', done: false, value: '' },
  });
  const handleBlur = event => {
    const field = event.target as IField;
    if (field.nodeName !== 'INPUT') return;
    try {
      const fieldResult = checkValid(field);
      setStatus(prev => ({
        ...prev,
        [field.name]: {
          ...[field.name],
          message: fieldResult.message,
          done: true,
          value: field.value,
        },
      }));
    } catch (error) {
      const fieldError = error as Error;
      setStatus(prev => ({
        ...prev,
        [field.name]: { ...[field.name], message: fieldError.message },
      }));
      field.focus();
    }
  };
  const handleBirth = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') return;
    if (event.target.value.length === 4 || event.target.value.length === 7) {
      event.target.value += '.';
    }
  };
  const handleTransportation = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement;
    target.classList.toggle('selected');
  };
  const handleTerms = (event: React.MouseEvent<HTMLInputElement>) => {
    if (!termsAllRef.current) return;
    if (termsAllRef.current.checked) {
      if (term1Ref.current) term1Ref.current.checked = true;
      if (term2Ref.current) term2Ref.current.checked = true;
    } else {
      if (term1Ref.current) term1Ref.current.checked = false;
      if (term2Ref.current) term2Ref.current.checked = false;
    }
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // post 요청으로 서버에 저장하기
    if (!Object.values(status).every(state => state.done)) return;
    setStatus(prev => ({ ...prev, round: 1, win: false }));
  };

  const handleBackButtonClick = (value: string) => {
    if (value === TERMS1) {
      setIsClickTerms1(false);
    }

    if (value === TERMS2) {
      setIsClickTerms2(false);
    }
  };

  const handleTermsDetailClick = (value: string) => {
    if (value === TERMS1) {
      setIsClickTerms1(true);
    }

    if (value === TERMS2) {
      setIsClickTerms2(true);
    }
  };

  return (
    <UserContainer>
      <UserWrap>
        <Header>
          <h2>
            크라우드 워커에 지원하기 위해
            <br />
            필요한 정보를 입력하세요.
          </h2>
        </Header>
        <Form onSubmit={handleSubmit}>
          <InfoWrap onBlur={handleBlur}>
            <Label>
              <span>이름</span>
              <input type="text" name="name" placeholder="홍길동" />
              <Message className={status?.name?.done ? 'done' : 'yet'}>
                {status?.name?.message}
              </Message>
            </Label>
            <Label>
              <span>성별</span>
              <RadioWrap>
                <Radio>
                  <input type="radio" value="여자" />
                  여자
                </Radio>
                <Radio>
                  <input type="radio" value="남자" />
                  남자
                </Radio>
              </RadioWrap>
              <Message className={status?.gender?.done ? 'done' : 'yet'}>
                {status?.gender?.message}
              </Message>
            </Label>
            <Label>
              <span>거주지역</span>
              <input type="text" placeholder="거주지역" />
            </Label>
            <Label>
              <span>연락처</span>
              <input type="text" placeholder="'-'없이 입력해 주세요." />
            </Label>
            <Label>
              <span>생년월일</span>
              <input
                type="text"
                name="birth"
                placeholder="YYYY.MM.DD"
                onKeyUp={handleBirth}
              />
              <Message className={status?.birth?.done ? 'done' : 'yet'}>
                {status?.birth?.message}
              </Message>
            </Label>
            <Label>
              <span>연락처</span>
              <input type="text" name="phone" placeholder="01012345678" />
              <Message className={status?.phone?.done ? 'done' : 'yet'}>
                {status?.phone?.message}
              </Message>
            </Label>
            <Label>
              <span>이메일</span>
              <input
                type="text"
                name="email"
                placeholder="gildonghong@gmail.com"
              />
              <Message className={status?.email?.done ? 'done' : 'yet'}>
                {status?.email?.message}
              </Message>
            </Label>
          </InfoWrap>
          <TransportWrap>
            <TitleWrap>
              <Title>주로 이용하는 교통수단</Title>
              <SubTitle>주로 이용하는 교통수단을 모두 선택해 주세요.</SubTitle>
            </TitleWrap>
            <ButtonWrap>
              {transportList.map((transport, index) => (
                <button
                  key={index}
                  name={transport}
                  onClick={handleTransportation}
                >
                  {transport}
                </button>
              ))}
            </ButtonWrap>
            <Message className={status?.transportation?.done ? 'done' : 'yet'}>
              {status?.transportation?.message}
            </Message>
          </TransportWrap>
          <TermsWrap>
            <AgreementAll>
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  onClick={handleTerms}
                  ref={termsAllRef}
                />
                <span>이용약관 모두 동의</span>
              </label>
            </AgreementAll>
            <AgreementRequired>
              <label>
                <input type="checkbox" name="term1" ref={term1Ref} />
                <span>개인정보 처리방침 고지 (필수)</span>
              </label>
              <ICon onClick={() => handleTermsDetailClick(TERMS1)}>
                <MdKeyboardArrowRight size={18} />
              </ICon>
            </AgreementRequired>
            <AgreementRequired>
              <label>
                <input type="checkbox" name="term2" ref={term2Ref} />
                <span>제3자 정보제공 동의 (필수)</span>
              </label>
              <ICon onClick={() => handleTermsDetailClick(TERMS2)}>
                <MdKeyboardArrowRight size={18} />
              </ICon>
            </AgreementRequired>
            <Message className={status?.terms?.done ? 'done' : 'yet'}>
              {status?.terms?.message}
            </Message>
          </TermsWrap>
          <SubmitWrap>
            <button type="submit">지원하기</button>
          </SubmitWrap>
        </Form>
      </UserWrap>
      {isClickTerms1 && (
        <TermsDetail
          handleBackButtonClick={handleBackButtonClick}
          title={TERMS1}
        />
      )}
      {isClickTerms2 && (
        <TermsDetail
          handleBackButtonClick={handleBackButtonClick}
          title={TERMS2}
        />
      )}
    </UserContainer>
  );
}

const UserContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  border: 1px solid #ccc;
  margin: 0 auto;
  //  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserWrap = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  margin-bottom: 45px;
  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 30px 0;
`;

const RadioWrap = styled.div`
  width: 100%;
  display: flex;
`;

const Radio = styled.div`
  & + & {
    margin-left: 100px;
  }
  input {
    margin-right: 10px;
  }
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  span:first-child {
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 15px;
  }
  input {
    font-size: 16px;
    line-height: 23px;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey_04};
  }
`;

const TransportWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 35px;
  button {
    padding: 10px 12px;
    border-radius: 8px;
    &.selected {
      font-weight: bold;
      color: #fff;
      background-color: #4e4e4e;
    }
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;
const Title = styled.div`
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.grey_05};
`;

const TermsWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const AgreementAll = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_06};
  input {
    margin-right: 20px;
  }
  span {
    font-size: 16px;
    line-height: 23px;
  }
`;

const AgreementRequired = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  input {
    margin-right: 20px;
  }
  span {
    font-size: 16px;
    line-height: 23px;
  }
`;

const ICon = styled.div`
  cursor: pointer;
`;

const SubmitWrap = styled.div`
  width: 100%;
  button {
    width: 100%;
    height: 50px;
  }
`;

const Message = styled.span`
  padding-top: 12px;
  font-size: 12px;
  &.done {
    color: green;
  }
  &.yet {
    color: red;
  }
`;
