import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface SelectProps {
  changeSelectValue: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ changeSelectValue }: SelectProps) {
  const searchSelectOptionList = [
    ['선택', 'select'],
    ['지원날짜', 'date'],
    ['지원자명', 'name'],
    ['성별', 'gender'],
    ['생년월일', 'birth'],
    ['이용수단', 'transportation'],
    ['거주지', 'region'],
  ];
  return (
    <SelectContainer onChange={changeSelectValue} defaultValue="select">
      {searchSelectOptionList.map(option => (
        <Option key={option[1]} value={option[1]}>
          {option[0]}
        </Option>
      ))}
    </SelectContainer>
  );
}

const SelectContainer = styled.select`
  width: 80px;
  appearance: none;
  background: url('./images/AiFillCaretDown.svg') no-repeat right;
`;

const Option = styled.option``;
