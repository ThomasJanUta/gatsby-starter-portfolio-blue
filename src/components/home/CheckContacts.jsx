import React from "react";
import check from "./check.svg";
import Typography from "@material-ui/core/Typography";
import plus from "./plus.svg";
import styled from "styled-components";
import { A_REL, OutboundLinkThemed } from "../navigation/ExternalLink";
import { CHANNELS } from "../navigation/Footer";

const Symbol = styled.img`
  height: 2rem;
  padding-right: 1rem;
`;
const CheckElement = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 1.5rem 0;
`;

const txt1 = ["State your preferred contact", "email@domain.domain"];
const txt2 = ["State your other contacts", "Twitter"];
const txt3 = ["State your other contacts", "Stack Overflow"];
const txt4 = ["State your other contacts", "GitHub"];

const CheckContacts = () => {
  return (
    <>
      <CheckElement>
        <Symbol src={check} alt="checkmark" />
        <div>
          <Typography variant="subtitle1">{txt1[0]}</Typography>
          <Typography variant="h6" color="secondary">{txt1[1]}</Typography>
        </div>
      </CheckElement>
      <CheckElement>
        <Symbol src={plus} alt="checkmark" />
        <div>
          <Typography variant="subtitle1">{txt2[0]}</Typography>
          <OutboundLinkThemed caption={CHANNELS.TWITTER.name} href={CHANNELS.TWITTER.url}
                              variant="subtitle1" rel={A_REL.ENDORSE} />
        </div>
      </CheckElement>
      <CheckElement>
        <Symbol src={plus} alt="checkmark" />
        <div>
          <Typography variant="subtitle1">{txt3[0]}</Typography>
          <OutboundLinkThemed caption={CHANNELS.STACKOVERFLOW.name}
                              href={CHANNELS.STACKOVERFLOW.url}
                              variant="subtitle1" rel={A_REL.ENDORSE} />
        </div>
      </CheckElement>
      <CheckElement>
        <Symbol src={plus} alt="checkmark" />
        <div>
          <Typography variant="subtitle1">{txt4[0]}</Typography>
          <OutboundLinkThemed caption={CHANNELS.GITHUB.name} href={CHANNELS.GITHUB.url}
                              variant="subtitle1" rel={A_REL.ENDORSE} />
        </div>
      </CheckElement>
    </>
  );
};

export default CheckContacts;