import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { RegionSelect } from '@components/region';
import TermsDetail from '@components/terms/TermsDetail';
import Modal from '@components/common/Modal';
import { IField } from '@type/models/form';
import { transport } from '@type/models/user';
import { checkValid } from '@utils/checkValid';
import { userInfoMutation } from '@api/userApi';
import { transportations } from '@constants/transportation';
import { requiredFields, defaultState, defaultInfo } from '@constants/user';

const TERMS1 = 'terms1';
const TERMS2 = 'terms2';

export default function User() {
  const navigate = useNavigate();
  const { mutate } = userInfoMutation();
  const termsRef = useRef<HTMLInputElement>(null);
  const term1Ref = useRef<HTMLInputElement>(null);
  const term2Ref = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const [isClickTerms1, setIsClickTerms1] = useState<boolean>(false);
  const [isClickTerms2, setIsClickTerms2] = useState<boolean>(false);
  const [isRegionFocus, setIsRegionFocus] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [open, setOpen] = useState({ visible: false, message: '' });
  const [userInfo, setUserInfo] = useState(defaultState);

  useEffect(() => {
    const result = requiredFields.every(fieldName => {
      return userInfo[fieldName].isDone > 0;
    });
    setIsCompleted(() => result);
  }, [requiredFields, userInfo]);

  const regionRef = useRef<HTMLInputElement | null>(null);

  const handleRegionFocus = () => setIsRegionFocus(prev => !prev);

  const handleBlur = event => {
    const field = event.target as IField;
    if (field.nodeName !== 'INPUT') return;

    try {
      const fieldResult = checkValid(field);
      setUserInfo(prev => ({
        ...prev,
        [field.name]: {
          ...[field.name],
          message: fieldResult.message,
          isDone: 1,
          value: field.value,
        },
      }));
    } catch (error) {
      const fieldError = error as Error;
      setUserInfo(prev => ({
        ...prev,
        [field.name]: { ...[field.name], message: fieldError.message },
      }));
      field.focus();
    }
  };

  const handleBirth = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') return;
    const len = event.target.value.length;
    if (len !== 4 && len !== 7) return;
    event.target.value += '.';
  };

  const handleTransportation = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    target.classList.toggle('selected');
    const selected = Array.from(target.classList).includes('selected');

    setUserInfo(prev => ({
      ...prev,
      transportation: {
        ...prev.transportation,
        value: { ...prev.transportation.value, [target.name]: selected },
        isDone: selected
          ? prev.transportation.isDone + 1
          : prev.transportation.isDone - 1,
      },
    }));
  };

  const handleTerms = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    switch (target.name) {
      case 'terms':
        if (term1Ref.current) term1Ref.current.checked = isChecked;
        if (term2Ref.current) term2Ref.current.checked = isChecked;
        setIsAgreed(() => isChecked);
        break;

      default:
        if (!(term1Ref.current && term2Ref.current && termsRef.current)) return;
        if (term1Ref.current.checked && term2Ref.current.checked) {
          termsRef.current.checked = true;
          setIsAgreed(() => true);
        } else {
          termsRef.current.checked = false;
          setIsAgreed(() => false);
        }
    }
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isCompleted || !isAgreed) return;
    const newInfo = defaultInfo;
    requiredFields.forEach(field => {
      const currentVal = userInfo[field].value;
      if (field === 'phone') {
        newInfo[field] = currentVal.replace(
          /(\d{3})(\d{4})(\d{4})/g,
          '$1-$2-$3',
        );
        return;
      }

      if (field !== 'transportation') {
        newInfo[field] = currentVal;
        return;
      }

      Object.values(currentVal).forEach((isSelected, index) => {
        if (!isSelected) return;
        const selectedItem = transportations[index] as transport;
        newInfo[field].push(selectedItem);
      });
    });

    mutate(newInfo);
    setOpen(prev => ({
      ...prev,
      visible: true,
      message: '지원이 완료되었습니다.',
    }));
  };

  const handleModal = () => {
    setOpen(prev => ({ ...prev, visible: false }));
    navigate('/admin');
  };

  const completeRegionSelect = (value: string) => {
    if (!regionRef.current) return;
    regionRef.current.value = value;
    handleRegionFocus();
  };

  return (
    <UserContainer>
      <Modal
        visible={open.visible}
        handleClick={handleModal}
        msg={open.message}
      />
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
              <Message className={userInfo?.name?.isDone ? 'isDone' : 'yet'}>
                {userInfo?.name?.message}
              </Message>
            </Label>
            <Label>
              <span>성별</span>
              <RadioWrap>
                <Radio>
                  <input type="radio" name="gender" value="female" />
                  여자
                </Radio>
                <Radio>
                  <input type="radio" name="gender" value="male" />
                  남자
                </Radio>
              </RadioWrap>
              <Message className={userInfo?.gender?.isDone ? 'isDone' : 'yet'}>
                {userInfo?.gender?.message}
              </Message>
            </Label>
            <Label>
              <span>거주지역</span>
              <input
                name="region"
                ref={regionRef}
                type="text"
                onFocus={handleRegionFocus}
                required
                placeholder="거주지역"
              />
            </Label>
            <Label>
              <span>연락처</span>
              <input
                type="text"
                name="phone"
                placeholder="'-'없이 입력해 주세요."
              />
              <Message className={userInfo?.phone?.isDone ? 'isDone' : 'yet'}>
                {userInfo?.phone?.message}
              </Message>
            </Label>
            <Label>
              <span>생년월일</span>
              <input
                type="text"
                name="birth"
                placeholder="YYYY.MM.DD"
                onKeyUp={handleBirth}
              />
              <Message className={userInfo?.birth?.isDone ? 'isDone' : 'yet'}>
                {userInfo?.birth?.message}
              </Message>
            </Label>
            <Label>
              <span>이메일</span>
              <input
                type="text"
                name="email"
                placeholder="gildonghong@gmail.com"
              />
              <Message className={userInfo?.email?.isDone ? 'isDone' : 'yet'}>
                {userInfo?.email?.message}
              </Message>
            </Label>
          </InfoWrap>
          <TransportWrap>
            <TitleWrap>
              <Title>주로 이용하는 교통수단</Title>
              <SubTitle>주로 이용하는 교통수단을 모두 선택해 주세요.</SubTitle>
            </TitleWrap>
            <ButtonWrap>
              {transportations.map((transport, index) => (
                <button
                  type="button"
                  key={index}
                  name={transport}
                  onClick={handleTransportation}
                >
                  {transport}
                </button>
              ))}
            </ButtonWrap>
            <Message
              className={userInfo?.transportation.isDone ? 'isDone' : 'yet'}
            >
              {userInfo.transportation.message}
            </Message>
          </TransportWrap>
          <TermsWrap onChange={handleTerms}>
            <AgreementAll>
              <label>
                <input type="checkbox" name="terms" ref={termsRef} />
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
          </TermsWrap>
          <SubmitWrap>
            <button
              type="submit"
              name="submit"
              disabled={!(isCompleted && isAgreed)}
              ref={submitRef}
            >
              지원하기
            </button>
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
      {isRegionFocus && (
        <RegionSelect
          completeRegionSelect={completeRegionSelect}
          handleRegionFocus={handleRegionFocus}
        />
      )}
    </UserContainer>
  );
}

const UserContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  margin: 0 auto;
  //  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const UserWrap = styled.div`
  width: 100%;
  height: 100%;
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
    font-weight: bold;
    color: #fff;
    background-color: #4e4e4e;
    border-radius: 8px;
    &:disabled {
      cursor: not-allowed;
      color: #7b7b7b;
      background: #eee;
    }
  }
`;

const Message = styled.span`
  padding-top: 12px;
  font-size: 12px;
  &.isDone {
    color: green;
  }
  &.yet {
    color: red;
  }
`;
