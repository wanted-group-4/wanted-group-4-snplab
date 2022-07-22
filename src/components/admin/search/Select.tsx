import React from 'react';
import styled from 'styled-components';

function Select() {
  const searchSelectOptionList = [
    ['지원날짜', 'date'],
    ['지원자명', 'name'],
    ['성별', 'sex'],
    ['생년월일', 'birth'],
    ['이용수단', 'transportation'],
    ['거주지', 'region'],
  ];
  return (
    <SelectContainer>
      {searchSelectOptionList.map(option => (
        <Option key={option[1]} value={option[1]}>
          {option[0]}
        </Option>
      ))}
    </SelectContainer>
  );
}

export default Select;

const SelectContainer = styled.select`
  width: 80px;
  appearance: none;
  background: url('./img/AiFillCaretDown.svg') no-repeat right;
`;

const Option = styled.option``;
