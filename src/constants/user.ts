import { transportations } from '@constants/transportation';
import { IUser } from '@type/models/user';
import setDateFormat from '@utils/setDateFormat';

const transportObj = {};
transportations.forEach(item => (transportObj[item] = false));

export const defaultState = {
  name: { message: '', isDone: 0, value: '' },
  gender: { message: '', isDone: 0, value: '' },
  birth: { message: '', isDone: 0, value: '' },
  region: { message: '', isDone: 0, value: '' },
  phone: { message: '', isDone: 0, value: '' },
  email: { message: '', isDone: 0, value: '' },
  transportation: { message: '', isDone: 0, value: transportObj },
};

export const requiredFields = [
  'name',
  'gender',
  'birth',
  'region',
  'phone',
  'email',
  'transportation',
];

export const defaultInfo: IUser = {
  round: 1,
  win: false,
  date: setDateFormat(new Date()),
  name: '',
  gender: 'female',
  birth: '',
  region: '',
  phone: '',
  email: '',
  transportation: [],
};
