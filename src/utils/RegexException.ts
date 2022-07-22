import { IField } from '../types/models/form';

class RegexException extends Error {
  _statusCode: number;
  _field: IField | null;

  constructor(msg = '잘못된 요청입니다', field: IField | null = null) {
    super(msg);
    this._statusCode = 400;
    this._field = field;
  }

  get statusCode() {
    return this._statusCode;
  }
  get field() {
    return this._field;
  }
  set field(params) {
    this._field = params;
  }
}

export default RegexException;
