
import React from 'react';
import styled from 'styled-components';
import { Current_Line, Foreground, Selection } from '../colours';

export const Header = () => (
  <HeaderBox>
    <HeaderBar>
      <Title>Anton Ego</Title>
    </HeaderBar>
  </HeaderBox>
)

const Title = styled.h1`
  color: ${Foreground};
  font-size: 50px;
  margin: 0;
  margin-bottom: 16px;
`

const HeaderBox = styled.div`
  display: flex;
  flex-grox: 1;
  width: 100%;
`
const HeaderBar = styled.div`
  padding-left: 32px;
  background-color: ${Current_Line};
  width: 100%;
`