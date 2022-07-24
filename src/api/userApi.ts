import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { IUser } from '@type/models/user';
import { BASE_URL } from '@api/index';
import format from 'date-fns/format';

// 모든 지역 가져오기
const fetchRegion = () => {
  return axios.get(`${BASE_URL}/region`);
};

export const getRegion = () => {
  return useQuery(['areaStore'], fetchRegion);
};

// 지역 선택해서 가져오기
const fetchArea = ({ queryKey }) => {
  const area = queryKey[1];
  axios.get(`${BASE_URL}/region?area=${area}`);
};

export const getRegionByArea = (area: string) => {
  return useQuery(['regionStore', area], fetchArea);
};

// 유저 저장 post (saveUserInfo.mutation({정보}))
// const createUserInfo = (userInfo: IUser) => {
//   return axios.post(`${BASE_URL}/users`, userInfo);
// };

// export const userInfoMutation = userInfo => {
//   userInfo.date = format(userInfo.date, 'yyyy.MM.dd');
//   const mutation = useMutation(createUserInfo(userInfo));
//   return mutation.mutate(userInfo);
// };
