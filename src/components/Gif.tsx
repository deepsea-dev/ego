import React from "react";
import styled from "styled-components";
import EgoPondersGifSrc from '../gifs/ponders.mp4';
import EgoFlashbackGifSrc from '../gifs/flashback.mp4';
import EgoWineEjectionGifSrc from '../gifs/wineEjection.mp4';

type GifProps = {
  src: string
}
const Gif: React.FC<GifProps> = ({src}) => {
  const StyledVideo = styled.video`
    width: 100%;
    height: auto;
  `;

  return (
    <StyledVideo loop autoPlay>
      <source src={src} type="video/mp4"/>
    </StyledVideo>
  )
}

export const EgoPondersGif = () => <Gif src={EgoPondersGifSrc}/>;
export const EgoFlashBackGif = () => <Gif src={EgoFlashbackGifSrc}/>;
export const EgoWineEjectionGif = () => <Gif src={EgoWineEjectionGifSrc}/>