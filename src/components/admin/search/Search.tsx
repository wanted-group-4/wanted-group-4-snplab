import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

import Select from '@components/admin/search/Select';

function Search() {
  return (
    <SearchContainer>
      <Select />
      <Line />
      <Input />
      <Button>
        <BsSearch />
      </Button>
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey_04};
  border-radius: 10px;
  padding: 10px;
`;
const Line = styled.div`
  height: 23px;
  width: 1px;
  background: ${({ theme }) => theme.color.grey_06};
  margin: 0 10px;
`;
const Input = styled.input`
  width: 360px;
  height: 30px;
`;
const Button = styled.button`
  background-color: #fff;
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.color.grey_04};
  }
`;
