import React, { useRef } from "react";
import styled from "styled-components";
import { Current_Line, Foreground, Purple, Red, Yellow } from "../colours";

export const SubmitButton = () => {
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

  return (
    <>
      <input ref={inputRef} type="file" hidden/>
      <StyledButton onClick={() => handleClick()}>I await your dish...</StyledButton>
    </>
  )
}