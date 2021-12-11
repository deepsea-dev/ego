import React from 'react';
import styled from 'styled-components';
import { Background } from './colours';
import { Card } from './components/Card';
import { Emph } from './components/Emph';
import { Header } from './components/Header';
import Ego from './images/Ego.webp';

function App() {
  return (
  <>
    <Header/>
    <Wrapper>
      <Body>
        <Card>
          After reading a lot of <Emph>overheated puffery </Emph> about your new cook, you know what I'm craving? A little <Emph>perspective</Emph>. That's it. I'd like some <Emph>fresh</Emph>, <Emph>clear</Emph>, <Emph>well-seasoned perspective</Emph>.
        </Card>
      </Body>  
      <EgoImage src={Ego} alt={"Anton Ego"} />
    </Wrapper>
  </>
  );
}

export default App;

const Wrapper = styled.div`
  padding-top: 40px;
  margin-left: 50px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  overflow-x: hidden;
`;

const Body = styled.div`
  width: 80% !important;
  min-width: 200px;
  display: flex;
  flex-direction: column;
`;

const EgoImage = styled.img`
  height: 85vh;
`;