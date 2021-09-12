import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const NumContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Num = styled.div`
  position: relative;
  top: 10px;
`;

const Nums = styled.div`
  margin: 10px;
`;

const Numbers = (props) => {
  const { num } = props;
  let numsArr = [];
  for (let i = 0; i < num; i++) {
    numsArr.push(
      <NumContainer active={false}>
        <Num>
          {i + 1}
        </Num>
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