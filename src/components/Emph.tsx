import styled from "styled-components";
import { Comment as C, Current_Line, Foreground, Orange, Pink, Purple, Red } from "../colours";

export const Emph = styled.span`
  color: ${Current_Line};
  text-shadow: 0 0 10px ${Purple};
`;