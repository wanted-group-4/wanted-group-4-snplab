import {
  checkName,
  checkBirth,
  checkPhone,
  checkEmail,
} from '@utils/validationRules';
import { IField } from '@type/models/form';

export const checkValid = (field: IField) => {
  let message = '';
  if (field.nodeName === 'INPUT') {
    switch (field.name) {
      case 'name':
        checkName(field);
        message = `${field.value}님, 반갑습니다!`;
        break;
      case 'birth':
        checkBirth(field);
        break;
      case 'phone':
        checkPhone(field);
        break;
      case 'email':
        checkEmail(field);
        break;
    }
  }
  return { message };
};
