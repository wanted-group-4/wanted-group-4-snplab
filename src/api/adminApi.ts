import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { BASE_URL } from '@api/index';
// 탭별 모든 유저 정보 가져오기(페이지네이션)
export const fetchUsers = async ({ queryKey }) => {
  const round = queryKey[1];
  const response = await axios.get(`${BASE_URL}/users?round=${round}`);
  return response.data;
};

export const fetchUserByFilter = async ({ queryKey }) => {
  const type = queryKey[1];
  const condition = queryKey[2];
  const round = queryKey[3];
  const response = await axios.get(
    `${BASE_URL}/users?${type}=${condition}&round=${round}&_sort=name`,
  );
  return response.data;
};

export const fetchUserBySimilarlity = async ({ queryKey }) => {
  const type = queryKey[1];
  const condition = queryKey[2];
  const round = queryKey[3];
  const response = await axios.get(
    `${BASE_URL}/users?${type}_like=${condition}&round=${round}&_sort=name`,
  );
  return response.data;
};

export const fetchUserByPeriod = async ({ queryKey }) => {
  const type = queryKey[1];
  const condition = queryKey[2];
  const round = queryKey[3];
  const response = await axios.get(
    `${BASE_URL}/users?${type}_gte=${condition[0]}&date_lte=${condition[1]}&round=${round}`,
  );
  return response.data;
};

const fetchLastRound = async () => {
  const response = await axios.get(`${BASE_URL}/users?_sort=round&_order=desc`);
  const lastRound = await response.data[0].round;
  const roundList = Array.from(Array(lastRound), (_, index) => index + 1);
  return roundList;
};

export const getRoundList = () => {
  return useQuery(['user', 'round'], fetchLastRound);
};

// update ----------------------------------

export const patchUserWin = () => {
  const fetch = async ({ id, win }: { id: number; win: boolean }) => {
    await axios.patch(`${BASE_URL}/users/${id}`, { win });
  };

  const queryClient = useQueryClient();
  return useMutation(fetch, {
    onSuccess: () => queryClient.invalidateQueries('users'),
  });
};
