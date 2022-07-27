import React, { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

import Select from '@components/admin/search/Select';
import TransportationInput from '@components/admin/search/TransportationInput';
import changeDateDBFormat from '@utils/changeDateDBFormat';
import validateDate from '@utils/validateDate';
import { IFilter } from '@type/models/filter';
import { transportations } from '@constants/transportation';

const serachError = (type: string) => {
  switch (type) {
    case 'date':
      return alert('올바른 형식의 날짜가 아닙니다.');
    case 'gender':
      return alert('올바른 형식의 성별이 아닙니다.');
    case 'birth':
      return alert('올바른 형식의 생년월일이 아닙니다.');
    case 'transportation':
      return alert('리스트에 없는 교통수단입니다');
    default:
      return;
  }
};
const changeDate = (value: string) => {
  const date = changeDateDBFormat(value);
  date.map(item => {
    validateDate(item);
  });

  if (date.length === 1) return [date[0], date[0]];

  return date;
};
const chagneGender = (value: string) => {
  if (!value.includes('여') && !value.includes('남')) throw Error();
  return value.includes('여') ? 'female' : 'male';
};
const changeBirth = (value: string) => {
  const date = changeDateDBFormat(value)[0];
  validateDate(date);
  return date;
};
const changeTransportation = (value: string) => {
  const array = value
    .split(',')
    .map(x => x.trim())
    .filter(item => item !== '');
  if (!transportations.includes(array[array.length - 1])) throw new Error();
  return array;
};
const transFormInputData = (type: string, value: string) => {
  switch (type) {
    case 'date':
      return changeDate(value);
    case 'gender':
      return chagneGender(value);
    case 'birth':
      return changeBirth(value);
    case 'transportation':
      return changeTransportation(value);
    default:
      return value;
  }
};

interface ISearchProps {
  handleFilter: (value: IFilter) => void;
}

export default function Search({ handleFilter }: ISearchProps) {
  const [type, setType] = useState<string>('select');
  const inputRef = useRef<HTMLInputElement>(null);

  const changeSelectValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    handleReset();
  };
  const handelKeypress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSubmit();
  };
  const handleSubmit = () => {
    const value = inputRef.current?.value;
    if (type === 'select') return alert('카테고리를 선택해주세요');
    if (value === '') return alert('검색어를 입력해주세요');
    try {
      const data = value && transFormInputData(type, value);
      data &&
        handleFilter({
          type: type,
          condition: data,
        });
    } catch (e) {
      serachError(type);
    }
  };
  const handleReset = () => {
    if (inputRef.current) inputRef.current.value = '';
    handleFilter({
      type: 'select',
      condition: '',
    });
  };
  const placeholder: { [key: string]: string } = {
    select: '카테고리를 선택해주세요',
    date: 'YYYY.MM.DD 또는 YYYY.MM.DD ~ YYYY.MM.DD',
    name: '지원자명을 입력해주세요',
    gender: '성별을 입력해주세요',
    birth: 'YYYY.MM.DD',
    transportation: 'ex 버스,지하철',
    region: '지역을 입력해주세요',
  };

  return (
    <SearchContainer>
      <Select changeSelectValue={changeSelectValue} />
      <Line />
      {type === 'transportation' ? (
        <TransportationInput
          placeholder={placeholder[type]}
          inputRef={inputRef}
          handelKeypress={handelKeypress}
        />
      ) : (
        <Input
          placeholder={placeholder[type]}
          ref={inputRef}
          onKeyDown={handelKeypress}
        />
      )}
      <Button onClick={handleReset}>
        <AiFillCloseCircle />
      </Button>
      <Button onClick={handleSubmit}>
        <BsSearch />
      </Button>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey_04};
  border-radius: 10px;
  padding: 10px;
  :focus-within {
    border-color: #7da1d9;
  }
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
  :focus {
    ~ button {
      svg {
        color: ${({ theme }) => theme.color.grey_05};
      }
    }
  }
`;
const Button = styled.button`
  background-color: #fff;
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.color.grey_04};
  }
`;
