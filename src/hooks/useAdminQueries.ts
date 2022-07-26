import { useQuery } from 'react-query';
import {
  fetchUsers,
  fetchUserByFilter,
  fetchUserBySimilarlity,
  fetchUserByPeriod,
} from '@api/adminApi';

export interface IFilter {
  type: string;
  condition: string | string[];
}

//유즈쿼리 만들기
function useAdminQueries(filter: IFilter, round: number) {
  const { type, condition } = filter;

  const fetchfunction = {
    name: fetchUserByFilter,
    gender: fetchUserByFilter,
    date: fetchUserByPeriod,
    region: fetchUserBySimilarlity,
    transportation: fetchUserBySimilarlity,
    birth: fetchUserBySimilarlity,
  };

  if (type === 'select') {
    return useQuery(['user', round], fetchUsers);
  }

  return useQuery(['user', type, condition, round], fetchfunction[type]);
}

export default useAdminQueries;
