import { differenceInDays } from 'date-fns';
import { IField } from '@type/models/form';
import RegexException from '@utils/validationException';

const isEmptyString = (content: unknown) => {
  return typeof content === 'string' && content.trim().length === 0;
};

class ValidationRegex {
  value(field: IField, msg = '') {
    const content = field.value;
    if (!content || isEmptyString(content)) {
      throw new RegexException(msg, field);
    }
    return true;
  }

  minLength(field: IField, len: number, msg = '') {
    const content = field.value;
    if (content.trim().length < len) throw new RegexException(msg, field);
    return true;
  }

  maxLength(field: IField, len: number, msg = '') {
    const content = field.value;
    if (content.trim().length > len) throw new RegexException(msg, field);
    return true;
  }

  isValidLength(field: IField, minLen: number, maxLen: number, msg?: string) {
    this.minLength(field, minLen, msg);
    this.maxLength(field, maxLen, msg);
    return true;
  }

  field(field: IField, msg = '', regexExpr: RegExp) {
    if (!regexExpr.test(field.value.trim())) {
      throw new RegexException(msg, field);
    }
    return true;
  }

  isKor(field: IField, msg = '') {
    return this.field(field, msg, /^[ㄱ-ㅎ가-힣]*$/);
  }

  isEmail(field: IField, msg = '') {
    return this.field(
      field,
      msg,
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-={0,66}).([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    );
  }

  isPhone(field: IField, msg = '') {
    const content = field.value.trim();
    const regex1 = /^01(?:0[1][6-9])(?:\d{4})\d{4}$/;
    const regex2 = /^\d{3}\d{4}\d{4}$/;
    if (!regex1.test(content) && !regex2.test(content)) {
      throw new RegexException(msg, field);
    }
    return true;
  }

  isDate(field: IField, msg = '') {
    return this.field(
      field,
      msg,
      /^\d{4}.(0[1-9]|1[012]).(0[1-9]|[12][0-9]|3[01])$/,
    );
  }

  isDateInRange(field: IField, lessMsg = '', overMsg = '') {
    const date = new Date(field.value);
    const minDate = new Date('1900.01.01');
    const current = new Date();
    if (differenceInDays(date, minDate) < 0) {
      throw new RegexException(lessMsg, field);
    } else if (differenceInDays(current, date) < 0) {
      throw new RegexException(overMsg, field);
    }
    return true;
  }
}

export default ValidationRegex;
