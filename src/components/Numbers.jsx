import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: ${(props) => props.active ? '#FFD205' : '#FFFFFF'};
  border: ${(props) => props.active ? '1px solid transparent' : '1px solid #DDDDDD'};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
`;

const Nums = styled.div`
  margin: 10px;
`;

const Numbers = ({ num, selected, onClick }) => {
  const numsArr = [...Array(num).keys()];
  return (
    <Nums>
      {numsArr.map(n => {
        const cellValue = n + 1;
        return <Cell
          key={cellValue}
          active={selected.find(s => s === (cellValue))}
          onClick={() => onClick(cellValue)}
          number={cellValue}
        />
      })}
    </Nums>
  )
}

const Cell = ({ number, active, onClick }) => {
  return (
    <Container 
      active={active}
      onClick={onClick}
    >
      {number}
    </Container>
  )
}

export default Numbers;