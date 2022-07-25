export interface IUser {
  round: number;
  name: string;
  gender: 'female' | 'male';
  birth: string;
  region: string;
  phone: string;
  email: string;
  transportation: transport[];
  win: boolean;
}

type transport =
  | '버스'
  | '지하철'
  | '택시'
  | 'KTX/기차'
  | '도보'
  | '자전거'
  | '전동킥보드'
  | '자가용';

export interface IAdmin extends IUser {
  readonly id: number;
  date: string;
}
