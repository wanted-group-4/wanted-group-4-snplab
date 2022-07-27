import React from 'react';
import styled from 'styled-components';

interface PickerProps {
  options: string[];
  handleSelectOption: (index: number) => void;

  listHeight: number;
  itemHeight: number;
  currentIndex: number;
}

export default function Picker({
  options,
  currentIndex,
  handleSelectOption,
  listHeight,
  itemHeight,
}: PickerProps) {
  const handleOnScroll = (event: React.UIEvent) => {
    const { scrollTop } = event.target as HTMLElement;
    const nextIndex = Math.round((scrollTop + itemHeight * 0.33) / itemHeight);
    handleSelectOption(nextIndex);
  };

  return (
    <Container>
      <Wrapper listHeight={listHeight} onScroll={handleOnScroll}>
        {options.map((option, index) => (
          <PickerItem
            isFocus={currentIndex === index}
            key={option}
            onClick={() => {
              handleSelectOption(index);
            }}
            itemHeight={itemHeight}
          >
            {option}
          </PickerItem>
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.ul<{
  listHeight: number;
}>`
  width: 100%;
  height: ${props => props.listHeight + 'px'};
  overflow-y: scroll;
  padding: 60px 0 80px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PickerItem = styled.li<{ itemHeight: number; isFocus: boolean }>`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  min-height: ${props => props.itemHeight + 'px'};
  background: ${props => props.isFocus && props.theme.color.grey_02};
  color: ${props =>
    props.isFocus ? props.theme.color.black : props.theme.color.grey_04};
  cursor: pointer;
  border-radius: 10px;
  :hover {
    color: ${({ theme }) => theme.color.black};
  }
`;
