import { useQuery } from 'react-query';
import {
  fetchUsers,
  fetchUserByFilter,
  fetchUserBySimilarlity,
  fetchUserByPeriod,
  fetchUserByTransportation,
} from '@api/adminApi';
import { IFilter } from '@type/models/filter';

//유즈쿼리 만들기
function useAdminQueries(filter: IFilter, round: number) {
  const { type, condition } = filter;

  const fetchfunction = {
    name: fetchUserByFilter,
    gender: fetchUserByFilter,
    date: fetchUserByPeriod,
    region: fetchUserBySimilarlity,
    transportation: fetchUserByTransportation,
    birth: fetchUserBySimilarlity,
  };

  if (type === 'select') {
    return useQuery(['user', round], fetchUsers);
  }

  return useQuery(['user', type, condition, round], fetchfunction[type]);
}

export default useAdminQueries;
