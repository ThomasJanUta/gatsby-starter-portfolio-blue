import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import * as PropTypes from "prop-types";
import { footerBackground } from "../element/theme";
import { InternalRoute } from "./InternalRoute";
import { A_REL, OutboundLinkThemed } from "./ExternalLink";
import { ROUTES } from "./routes";
import { Logo } from "./HeaderElements";

export const CHANNELS = {
  TWITTER: {
    name: "Twitter",
    url: "",
  },
  STACKOVERFLOW: {
    name: "Stack Overflow",
    url: "",
  },
  GITHUB: {
    name: "GitHub",
    url: "",
  },
  LINKEDIN: {
    name: "LinkedIn",
    url: "",
  },
};

const StickyBottomFooter = styled.footer`
  z-index: 1;
  margin-top: auto;
`;
const FooterContainer = styled.footer`
  background: ${footerBackground};
  padding: 4rem 1rem;
  flex-grow: 1;
`;
const FooterNavLogo = styled.nav`
  justify-content: center;
  display: flex;
`;
const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;
const FooterListElement = styled.li`
  display: inline-block;
  margin: 0 1rem;
`;

const Footer = () => {
  return (
    <StickyBottomFooter>
      <FooterContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FooterNavLogo>
              <Logo variant="h4" showAvatar />
            </FooterNavLogo>
          </Grid>
          <Grid item xs={12}>
            <nav>
              <FooterList>
                <FooterListElement>
                  <OutboundLinkThemed caption={CHANNELS.TWITTER.name} href={CHANNELS.TWITTER.url}
                                      variant="subtitle1" rel={A_REL.ENDORSE} />
                </FooterListElement>
                <FooterListElement>
                  <OutboundLinkThemed caption={CHANNELS.STACKOVERFLOW.name}
                                      href={CHANNELS.STACKOVERFLOW.url}
                                      variant="subtitle1" rel={A_REL.ENDORSE} />
                </FooterListElement>
                <FooterListElement>
                  <OutboundLinkThemed caption={CHANNELS.GITHUB.name} href={CHANNELS.GITHUB.url}
                                      variant="subtitle1" rel={A_REL.ENDORSE} />
                </FooterListElement>
              </FooterList>
            </nav>
          </Grid>
          <Grid item xs={12}>
            <nav>
              <FooterList>
                <FooterListElement>
                  <InternalRoute caption={ROUTES.RESUME.CAPTION} to={ROUTES.RESUME.TO}
                                 variant="subtitle1" />
                </FooterListElement>
                <FooterListElement>
                  <InternalRoute caption={ROUTES.PORTFOLIO.CAPTION} to={ROUTES.PORTFOLIO.TO}
                                 variant="subtitle1" />
                </FooterListElement>
                <FooterListElement>
                  <InternalRoute caption={ROUTES.CONTACT.CAPTION} to={ROUTES.CONTACT.TO}
                                 variant="subtitle1" />
                </FooterListElement>
                <FooterListElement>
                  <InternalRoute caption={ROUTES.LEGAL.CAPTION} to={ROUTES.LEGAL.TO}
                                 variant="subtitle1" />
                </FooterListElement>
                <FooterListElement>
                  <InternalRoute caption={ROUTES.PRIVACY.CAPTION} to={ROUTES.PRIVACY.TO}
                                 variant="subtitle1" />
                </FooterListElement>
              </FooterList>
            </nav>
          </Grid>
        </Grid>
      </FooterContainer>
    </StickyBottomFooter>
  );
};
Footer.propTypes = {
  hideNewsletter: PropTypes.bool,
};
Footer.defaultProps = {
  hideNewsletter: false,
};
export default Footer;
