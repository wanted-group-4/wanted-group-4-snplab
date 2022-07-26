import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
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
    `${BASE_URL}/users?${type}_gte=${condition[0]}&date_lte=${condition[1]}&round=${round}&_sort=name`,
  );
  return response.data;
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
