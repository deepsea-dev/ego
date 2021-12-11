import React from "react";
import styled from "styled-components";
import { Current_Line, Foreground, Purple, Red, Yellow } from "../colours";

export const SubmitButton = () => {
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

  return (
    <StyledButton>I await your dish...</StyledButton>
  )
}