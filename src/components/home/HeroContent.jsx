import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { ContentDiv } from "../element/layout/ContentContainers";
import Check from "./Check";
import Cta from "./Cta";

const Container = styled(ContentDiv)`
  z-index: 0;
  margin: 4rem auto;
  text-align: left;
  display: flex;
  flex-flow: column nowrap;
`;

const txt = ["Start your tagline", "and end your tagline."];

const HeroContent = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>{txt[0]}</Typography>
      <Typography variant="h2" gutterBottom paragraph>{txt[1]}</Typography>

      <Check />
      <Cta />

    </Container>
  );
};
export default HeroContent;