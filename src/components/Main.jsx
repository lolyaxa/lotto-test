import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Numbers from './Numbers';

const FIRST_SELECTED_MAX = 8;
const SECOND_SELECTED_MAX = 1;
const FIRST_ARRAY = 19;
const SECOND_ARRAY = 4;

const Container = styled.div`
  background: #992667;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const LottoContainer = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  height: 400px;
  margin: 30px;
  background: #FFFFFF;
  border: 0.5px solid #D7D7D7;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(0, 0, 0, 0.65);
  padding: 5px;
`;

const Title = styled.div`
  display: block;
  color: rgb(33, 33, 33);
  margin: 20px;
  padding: 0px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
`;

const Subtitle = styled.div`
  display: block;
  margin: 10px;
  color: rgba(0, 0, 0, 0.435);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.8px;
  line-height: 1.33333;
`;

const Main = () => {
  const [selectedNums1, setSelectedNums1] = useState([]);
  const [selectedNums2, setSelectedNums2] = useState([]);
  function onNumClick(value, variant, setValue) {
    const selected = variant === 1 ? selectedNums1 : selectedNums2;
    const max = variant === 1 ? FIRST_SELECTED_MAX : SECOND_SELECTED_MAX;
    const idx = selected.findIndex(s => s === value);
    if (idx === -1 && selected.length < max) {
      setValue([...selected, value]);
    } else {
      const newSelected = selected.filter(s => s !== value);
      setValue(newSelected);
    };
  };
  return (
    <Container>
      <LottoContainer>
        <Title>
          Гослото "8 из 19"
        </Title>
        <Subtitle>
          Первая часть поля
        </Subtitle>
        Выберите 8 чисел
        <Numbers
          num={FIRST_ARRAY}
          selected={selectedNums1}
          onClick={(value) => onNumClick(value, 1, setSelectedNums1)}
        />
        <Subtitle>
          Вторая часть поля
        </Subtitle>
        Выберите 1 число
        <Numbers
          num={SECOND_ARRAY}
          selected={selectedNums2}
          onClick={(value) => onNumClick(value, 2, setSelectedNums2)}
        />
      </LottoContainer>
    </Container>
    
  )
}

export default Main;