import { AppBar, Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Current_Line, Selection } from '../colours';

export const Header = () => (
  <HeaderBox>
    <HeaderBar>
      <Typography variant="h3" component="div">Anton Ego</Typography>
    </HeaderBar>
  </HeaderBox>
)

const HeaderBox = styled(Box)`
  display: flex;
  flex-grox: 1;
`
const HeaderBar = styled(AppBar)`
  padding: 16px;
  background-color: ${Current_Line};
  text-colour: ${Selection};
`