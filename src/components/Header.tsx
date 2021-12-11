import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const Header = () => (
  <HeaderBox>
    <Typography variant="h1" component="div">Anton Ego</Typography>
  </HeaderBox>
)

const HeaderBox = styled(Box)`
  display: flex;
  flex-grox: 1;
`