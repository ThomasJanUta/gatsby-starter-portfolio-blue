import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link as GatsbyLink } from "gatsby";
import { ROUTES } from "../navigation/routes";

const Container = styled.div`
  margin: 2rem 0 1rem 0;
  padding: 3rem;
  border: #03dac4 solid 5px;
  border-radius: 0.5rem;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const txt = ["State your call to action", "CTA button"];

const Cta = () => {
  return (
    <Container>
      <Typography variant="h2" style={{ marginBottom: "2rem" }}>{txt[0]}</Typography>
      <Button variant="contained" color="secondary" size="large"
              component={GatsbyLink} to={ROUTES.CONTACT.TO}>
        {txt[1]}
      </Button>
    </Container>
  );
};

export default Cta;