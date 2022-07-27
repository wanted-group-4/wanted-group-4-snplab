const NUM = 'Num.';
const SELECT = '선택';
const DATE = '지원날짜';
const NAME = '지원자명';
const GENDER = '성별';
const BIRTH = '생년월일';
const PHONE = '연락처';
const EMAIL = '이메일';
const TRANSPORTATION = '이용수단';
const REGION = '거주지';
const WIN_OR_NOT = '당첨여부';

export const titleList = [
  NUM,
  DATE,
  NAME,
  GENDER,
  BIRTH,
  PHONE,
  EMAIL,
  TRANSPORTATION,
  REGION,
  WIN_OR_NOT,
];

export const searchSelectOptionList = [
  [SELECT, 'select'],
  [DATE, 'date'],
  [NAME, 'name'],
  [GENDER, 'gender'],
  [BIRTH, 'birth'],
  [TRANSPORTATION, 'transportation'],
  [REGION, 'region'],
];

export const placeholder: { [key: string]: string } = {
  select: '카테고리를 선택해주세요',
  date: 'YYYY.MM.DD 또는 YYYY.MM.DD ~ YYYY.MM.DD',
  name: '지원자명을 입력해주세요',
  gender: '성별을 입력해주세요',
  birth: 'YYYY.MM.DD',
  transportation: 'ex 버스,지하철',
  region: '지역을 입력해주세요',
};
