
import React from 'react';
import styled from 'styled-components';
import { Current_Line, Foreground, Selection, Comment, Purple } from '../colours';
import {ReactComponent as ResetIcon } from '../images/resetIcon.svg';

export type HeaderProps = {
  resetCallback: () => void;
  resetVisible: boolean;
}

export const Header: React.FC<HeaderProps> = ({resetCallback, resetVisible}) => (
  <HeaderBox>
    <HeaderBar>
      <Title>Anton Ego</Title>
      {resetVisible && <ResetButton onClick={resetCallback}><ResetIcon/></ResetButton>}
    </HeaderBar>
  </HeaderBox>
)

const ResetButton = styled.button`
  width: 64px;
  height: 64px;

  background-color: ${Foreground};
  border-radius: 10px;
  border-color: ${Current_Line};
  border-width: 6px;
  box-shadow: none;
  text-decoration: none;
  font-size: 32px;
  color: ${Comment};
  font-weight: bolder;
  
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 40px;
    width: 40px;
    transform: scaleX(-1);
    filter: drop-shadow(0px 0px 5px ${Purple});
  }
`

const Title = styled.h1`
  color: ${Foreground};
  font-size: 50px;
  margin: 0;
  margin-bottom: 16px;
`

const HeaderBox = styled.div`
  display: flex;
  width: 100%;
`
const HeaderBar = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  background-color: ${Current_Line};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`