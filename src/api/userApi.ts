import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { IUser } from '@type/models/user';
import { BASE_URL } from '@api/index';
import format from 'date-fns/format';

// 모든 지역 가져오기
const fetchRegion = async () => {
  const response = await axios.get(`${BASE_URL}/region`);
  return response.data;
};

export const getRegion = () => {
  return useQuery(['areaStore'], fetchRegion);
};

// 유저 저장 post (saveUserInfo.mutation({정보}))
export const userInfoMutation = () =>
  useMutation((userInfo: IUser) => {
    return axios.post(`${BASE_URL}/users`, userInfo);
  });
