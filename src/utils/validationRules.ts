import ValidationRegex from '@utils/validationRegex';
import { IField } from '@type/models/form';

const validationRegex = new ValidationRegex();

export const checkName = (field: IField) => {
  validationRegex.value(field, '필수 정보입니다.');
  validationRegex.isKor(field, '한글만 입력 가능합니다.');
};
export const checkBirth = (field: IField) => {
  validationRegex.value(field, '필수 정보입니다.');
  validationRegex.isValidLength(
    field,
    10,
    10,
    'YYYY.MM.DD 형식에 맞는 값을 입력해주세요.',
  );
  validationRegex.isDate(field, '잘못된 생년월일입니다.');
};
export const checkPhone = (field: IField) => {
  validationRegex.value(field, '필수 정보입니다.');
  validationRegex.isPhone(field, '올바른 전화번호 형식이 아닙니다.');
};
export const checkEmail = (field: IField) => {
  validationRegex.value(field, '필수 정보입니다.');
  validationRegex.isEmail(field, '올바른 이메일 형식이 아닙니다.');
};
