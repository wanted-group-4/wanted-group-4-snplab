import axios from 'axios';
import { useQuery, useMutation } from 'react-query';
import { BASE_URL } from '@api/index';

// 탭별 모든 유저 정보 가져오기(페이지네이션)
const fetchInfo = ({ queryKey }) => {
  const round = queryKey[1];
  return axios.get(`${BASE_URL}/users?round=${round}`);
};

export const getUserInfo = (round = 1) => {
  return useQuery(['userInfoStore', round], fetchInfo);
};
// 당첨여부 (수정해야합니다..)
// const updatedWinStatus = (id, winStatus) => {
//   return axios.patch(`${BASE_URL}/users/${id}/win`, winStatus);
// };

// export const winStatusMutation = (id: number, winStatus: any) => {
//   const mutation = useMutation(updatedWinStatus(id, winStatus));
//   return mutation.mutate(id, winStatus);
// };

// 이름 기준 필터링, 이름 기준 순서
const fetchUserByName = ({ queryKey }) => {
  const name = queryKey[1];
  const round = queryKey[2];
  return axios.get(`${BASE_URL}/users?name=${name}&round=${round}&_sort=name`);
};

export const getUserByname = (name: string, round = 1) => {
  return useQuery(['userNameStore', name, round], fetchUserByName);
};

// 성별 기준 필터링, 이름 기준 순서
const fetchUserByGender = ({ queryKey }) => {
  const gender = queryKey[1];
  const round = queryKey[2];
  return axios.get(
    `${BASE_URL}/users?gender=${gender}&round=${round}&_sort=name`,
  );
};

export const getUserByGender = (gender: string, round = 1) => {
  return useQuery(['userGenderStore', gender, round], fetchUserByGender);
};

//지역 기준 필터링, 이름 기준 순서
const fetchUserByArea = ({ queryKey }) => {
  const region = queryKey[1];
  const round = queryKey[2];
  return axios.get(
    `${BASE_URL}/users?region_like=${region}&round=${round}&_sort=name`,
  );
};

export const getUserByArea = (region: string, round = 1) => {
  return useQuery(['userRegionStore', region, round], fetchUserByArea);
};

//이동수단 기준 필터링, 이름 기준 순서
const fetchUserBytransportation = ({ queryKey }) => {
  const transportation = queryKey[1];
  const round = queryKey[2];
  return axios.get(
    `${BASE_URL}/users?transportation_like=${transportation}&round=${round}&_sort=name`,
  );
};

export const getUserBytransportation = (transportation: string, round = 1) => {
  return useQuery(
    ['userRegion', transportation, round],
    fetchUserBytransportation,
  );
};

//생년월일 기준 필터링(.가능), 이름 기준 순서
const fetchUserByBirth = ({ queryKey }) => {
  const birth = queryKey[1];
  const round = queryKey[2];
  return axios.get(
    `${BASE_URL}/users?birth_like=${birth}&round=${round}&_sort=name`,
  );
};

export const getUserByBirth = (birth: string, round = 1) => {
  return useQuery(['userBirth', birth, round], fetchUserByBirth);
};

//날짜 기준 필터링(.가능), 이름 기준 순서
