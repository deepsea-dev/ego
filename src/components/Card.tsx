import styled from "styled-components";
import { Comment, Current_Line, Foreground, Selection } from "../colours";

export const Card = styled.div`
  border-radius: 10px;
  background-color ${Foreground};
  padding: 16px;
  *, &{
    font-size: 32px;
    color: ${Comment};
    font-weight: bolder;
  }
`