import React, { useState, useEffect, isValidElement } from 'react';
import styled from '@emotion/styled';
import Numbers from './Numbers';
import NotificationPopup from './NotificationPopup';

const FIRST_SELECTED_MAX = 8;
const SECOND_SELECTED_MAX = 1;
const FIRST_ARRAY_LENGTH = 19;
const SECOND_ARRAY_LENGTH = 4;

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

const Button = styled.div`
  display: ${(props) => props.show ? 'block' : 'none'};
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border: 1px solid #AA00A2;
  padding: 10px;
`;

function getRandomArray(length, max) {
  const arr = [];
  while (arr.length !== length) {
    const num = Math.floor(Math.random() * max + 1);
    if (arr.find(n => n === num) === undefined) {
      arr.push(num);
    }
  };
  return arr;
};

const winningNums1 = getRandomArray(FIRST_SELECTED_MAX, FIRST_ARRAY_LENGTH);
const winningNums2 = getRandomArray(SECOND_SELECTED_MAX, SECOND_ARRAY_LENGTH);

const Main = () => {
  const [selectedNums1, setSelectedNums1] = useState([]);
  const [selectedNums2, setSelectedNums2] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  function isValid() {
    return selectedNums1.length === FIRST_SELECTED_MAX && selectedNums2.length === SECOND_SELECTED_MAX;
  };

  function isWinner() {
    const matches1 = selectedNums1.filter(s => winningNums1.includes(s)).length;
    const matches2 = selectedNums2.filter(s => winningNums2.includes(s)).length;
    return matches1 >= 4 || (matches1 >= 3 && matches2 === 1)
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
          num={FIRST_ARRAY_LENGTH}
          selected={selectedNums1}
          onClick={(value) => onNumClick(value, 1, setSelectedNums1)}
        />
        <Subtitle>
          Вторая часть поля
        </Subtitle>
        Выберите 1 число
        <Numbers
          num={SECOND_ARRAY_LENGTH}
          selected={selectedNums2}
          onClick={(value) => onNumClick(value, 2, setSelectedNums2)}
        />
        <Button show={isValid()} onClick={() => setIsSubmitted(true)}>
          Проверить билет!
        </Button>
        <NotificationPopup show={isSubmitted} isWinner={isWinner()} />
      </LottoContainer>
    </Container>
  )
}

export default Main;