import React, { ChangeEvent, KeyboardEvent, RefObject, useState } from 'react';
import styled from 'styled-components';

import { transportations } from '@constants/transportation';

interface ITransportationInputProps {
  placeholder: string;
  inputRef: RefObject<HTMLInputElement>;
  handelKeypress: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export default function TransportationInput({
  placeholder,
  inputRef,
  handelKeypress,
}: ITransportationInputProps) {
  const [options, setOptions] = useState(transportations);

  const changeOptionList = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const blankRegex = /\s/gi;
    const lastCommaRegex = /,$/;
    const data = value.replace(blankRegex, '').split(',');

    if (value.length === 0) setOptions(transportations);

    if (value.match(lastCommaRegex)) {
      if (!transportations.includes(data[data.length - 2]))
        return alert('리스트에 없는 이용수단입니다');

      const list = transportations
        .filter(transportaion => !data.includes(transportaion))
        .map(item => `${value}${item}`);

      list.unshift(value.replace(lastCommaRegex, ''));

      setOptions(list);
    }
  };

  return (
    <>
      <Input
        type="text"
        list="transportation"
        ref={inputRef}
        onChange={changeOptionList}
        onKeyDown={handelKeypress}
        placeholder={placeholder}
      />
      <DataList id="transportation">
        {options.map(option => (
          <Option key={option}>{option}</Option>
        ))}
      </DataList>
    </>
  );
}

const Input = styled.input`
  width: 360px;
  height: 30px;
`;
const DataList = styled.datalist``;
const Option = styled.option``;
