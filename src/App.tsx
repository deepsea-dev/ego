import React from 'react';
import styled from 'styled-components';
import { Background } from './colours';
import { Header } from './components/Header';
function App() {
  return (
    <Body>
      <Header/>
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color: ${Background};
  height: 100vh;
  width: 100vw;
`
