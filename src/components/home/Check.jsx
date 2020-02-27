import React from "react";
import check from "./check.svg";
import Typography from "@material-ui/core/Typography";
import plus from "./plus.svg";
import minus from "./minus.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 1rem 0;
`;
const Symbol = styled.img`
  height: 2rem;
  padding-right: 1rem;
`;
const CheckElement = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 2.5rem 0;
`;

const txt1 = ["State what you do best", "HTML + CSS + Javascript, ReactJS, GatsbyJS"];
const txt2 = ["State your profession", "Web developer"];

const Check = () => {
  return (
    <Container>
      <div>
        <CheckElement>
          <Symbol src={check} alt="checkmark" />
          <div>
            <Typography variant="body1">{txt1[0]}</Typography>
            <Typography variant="body1">{txt1[1]}</Typography>
          </div>
        </CheckElement>
        <CheckElement>
          <Symbol src={check} alt="checkmark" />
          <div>
            <Typography variant="body1">{txt2[0]}</Typography>
            <Typography variant="body1">{txt2[1]}</Typography>
          </div>
        </CheckElement>
      </div>
    </Container>
  );
};

export default Check;