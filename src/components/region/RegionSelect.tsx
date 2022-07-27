import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { getRegion } from '@api/userApi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { Picker } from '@components/region';

interface RegionSelectProps {
  completeRegionSelect: (value: string) => void;
  handleRegionFocus: () => void;
}

const LIST_HEIGHT = 240;
const ITEM_HEIGHT = 60;

export default function RegionSelect({
  completeRegionSelect,
  handleRegionFocus,
}: RegionSelectProps) {
  const { data: regions, isLoading } = getRegion();
  const cityList =
    regions && regions.length > 0 ? regions.map(region => region.area) : [];

  const [cityIndex, setCityIndex] = useState<number>(0);
  const [city2Index, setCity2Index] = useState<number>(0);

  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, handleRegionFocus);

  const handleSelectCity = (index: number) => {
    setCityIndex(index);
    setCity2Index(0);
  };

  const handleSelectCity2 = (index: number) => {
    setCity2Index(index);
  };

  if (isLoading) return <div>로딩중 ...</div>;

  return (
    <Container>
      <Wrapper ref={ref}>
        <Header>
          <ICon onClick={handleRegionFocus}>
            <MdKeyboardArrowLeft size={24} />
          </ICon>
          <h2>거주지역 선택</h2>
        </Header>
        <Content>
          <Box>
            <Title>시 / 도</Title>
            <Picker
              options={cityList}
              currentIndex={cityIndex}
              handleSelectOption={handleSelectCity}
              listHeight={LIST_HEIGHT}
              itemHeight={ITEM_HEIGHT}
            />
          </Box>
          <Box>
            <Title>시 / 구 / 군</Title>
            <Picker
              currentIndex={city2Index}
              options={regions[cityIndex].zone}
              handleSelectOption={handleSelectCity2}
              listHeight={LIST_HEIGHT}
              itemHeight={ITEM_HEIGHT}
            />
          </Box>
        </Content>
        <ButtonWrap>
          <Button
            onClick={() =>
              completeRegionSelect(
                `${regions[cityIndex].area} ${regions[cityIndex].zone[city2Index]}`,
              )
            }
          >
            확인
          </Button>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Wrapper = styled.div`
  width: 100%;
  //height: 50%;
  background: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 15px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_04};
  margin-bottom: 30px;
  h2 {
    font-weight: 700;
  }
`;

const ICon = styled.div`
  position: absolute;
  top: 11px;
  left: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
`;

const Box = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
`;

const ButtonWrap = styled.div`
  width: 100%;
  padding: 30px 15px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  text-align: center;
  border-radius: 15px;
  background: ${({ theme }) => theme.color.grey_06};
  color: white;
`;
