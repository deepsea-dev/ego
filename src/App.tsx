import React from 'react';
import styled from 'styled-components';
import { Background } from './colours';
import { Header } from './components/Header';
import Ego from './images/Ego.webp';

function App() {
  return (
  <>
    <Header/>
    <Wrapper>
      <Body>
      </Body>  
      <EgoImage src={Ego} alt={"Anton Ego"} />
    </Wrapper>
  </>
  );
}

export default App;

const Wrapper = styled.div`
  padding-top: 120px;
  margin-left: 50px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  overflow-x: hidden;
`;

const Body = styled.div`
  width: 80% !important;
  min-width: 200px;
`;

const EgoImage = styled.img`
  height: 85vh;
`;