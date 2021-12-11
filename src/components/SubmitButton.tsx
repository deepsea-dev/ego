import React, { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { Current_Line, Foreground, Purple, Red, Yellow } from "../colours";
import { Emph } from "./Emph";

export type SubmitButtonProps = {
  setImageUrl: (url: string) => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({setImageUrl}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const StyledButton = styled.button`
    height: calc(100% + 32px);
    width: calc(100% + 32px);
    margin: -16px;
    vertical-align: top;
    background-color: ${Foreground};
    border-radius: 10px;
    border-color: ${Current_Line};
    border-width: 6px;
    box-shadow: none;
    text-decoration: none;
  `;

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <>
      <input ref={inputRef} type="file" hidden onChange={onImageChange}/>
      <StyledButton onClick={() => handleClick()}><Emph>I await your dish...</Emph></StyledButton>
    </>
  )
}