import React, { useState } from 'react';
import styled from 'styled-components';
import { Background } from './colours';
import { Card } from './components/Card';
import { Emph } from './components/Emph';
import { Header } from './components/Header';
import { Review } from './components/Review';
import { SubmitButton } from './components/SubmitButton';
import Ego from './images/Ego.webp';

function App() {
  const [imageUrl, setImageUrl] = useState<null | string>(null);

  return (
  <>
    <Header/>
    <Wrapper>
      <Body>
        <Card>
          After reading a lot of <Emph>overheated puffery </Emph> about your new cook, you know what I'm craving? A little <Emph>perspective</Emph>. That's it. I'd like some <Emph>fresh</Emph>, <Emph>clear</Emph>, <Emph>well-seasoned perspective</Emph>.
        </Card>
        {!imageUrl && <Card>
          <SubmitButton setImageUrl={setImageUrl}/>
        </Card>}
        {imageUrl && <Review imageUrl={imageUrl} reviewContent={<span>yum yum in my tum tum</span>}/>}
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
  row-gap: 32px;
  align-content: center;
`;

const EgoImage = styled.img`
  height: 85vh;
  position: fixed;

  @media (min-width: 400px) {
    right: -100px;
  }


  @media (max-width: 400px) {
    right: -100px;
  }

  @media (min-width: 600px) {
    right: -60px;
  }

  @media (min-width: 800px) {
    right: -20px;
  }

  @media (min-width: 1000px) {
    right: 32px;
  }
  
`;