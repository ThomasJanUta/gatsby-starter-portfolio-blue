import styled from "styled-components";
import { contentMaxWidth } from "../theme";

export const ContentDiv = styled.div`
  max-width: ${contentMaxWidth}rem;
  margin: 0 auto;
  padding: 0 0.8rem; 
  /* --- 0.8 necessary for Fucking MUI bug x-axis overflow when using Grid container spacing --- */
`;
