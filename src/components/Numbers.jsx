import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const NumContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: ${(props) => props.active ? '#FFD205' : '#FFFFFF'};
  border: ${(props) => props.active ? 'none' : '1px solid #DDDDDD'};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
`;

const Nums = styled.div`
  margin: 10px;
`;

const Numbers = (props) => {
  const { num, selected, onClick } = props;
  let numsArr = [];
  for (let i = 0; i < num; i++) {
    numsArr.push(
      <NumContainer key={i + 1} active={selected.find(s => s === (i + 1))} onClick={(e) => onClick(e.target.innerHTML * 1)}>
        {i + 1}
      </NumContainer>
    );
  }
  return (
    <Nums>
      {numsArr}
    </Nums>
  )
}

export default Numbers;