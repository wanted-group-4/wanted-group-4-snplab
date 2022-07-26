import { searchSelectOptionList } from '@src/constants/admin';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface SelectProps {
  changeSelectValue: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ changeSelectValue }: SelectProps) {
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
