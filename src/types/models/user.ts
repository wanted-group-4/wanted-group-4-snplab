export interface IUser {
  name: string;
  sex: 'female' | 'male';
  birth: Date;
  region: string;
  phone: number;
  email: string;
  transportation: transport[];
}

type transport = [
  | '버스'
  | '지하철'
  | '택시'
  | 'KTX/기차'
  | '도보'
  | '자전거'
  | '전동킥보드'
  | '자가용',
];
