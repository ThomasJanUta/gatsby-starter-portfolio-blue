import React from "react";
import styled from "styled-components";
import { ROUTES } from "./routes";
import { InternalRoute } from "./InternalRoute";
import * as PropTypes from "prop-types";
import MyAvatar from "../element/graphical/MyAvatar";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const txt = "Portfolio Blue";

export const Logo = ({ variant, showAvatar }) => {
  if (showAvatar) {
    return (
      <LogoContainer>
        <MyAvatar src="/broken-image.jpg" alt={txt} height="4rem" width="4rem" />
        <InternalRoute caption={txt} to={ROUTES.HOME.TO}
                       variant={variant}
                       lightTheme="header" />
      </LogoContainer>
    );
  }
  return (
    <InternalRoute caption={txt} to={ROUTES.HOME.TO}
                   variant={variant}
                   lightTheme="header" />
  );
};
Logo.defaultProps = {
  variant: "h2",
  showAvatar: false,
};
Logo.propTypes = {
  variant: PropTypes.string,
  showAvatar: PropTypes.bool,
};

const NavSt = styled.nav`
  width: 18rem;
  padding: 0 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const UlSt = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const NavList = () => {
  return (
    <NavSt>
      <UlSt>
        <InternalRoute caption={ROUTES.RESUME.CAPTION} to={ROUTES.RESUME.TO}
                       variant="subtitle1" />
      </UlSt>
      <UlSt>
        <InternalRoute caption={ROUTES.PORTFOLIO.CAPTION} to={ROUTES.PORTFOLIO.TO}
                       variant="subtitle1" />
      </UlSt>
      <UlSt>
        <InternalRoute caption={ROUTES.CONTACT.CAPTION} to={ROUTES.CONTACT.TO}
                       variant="subtitle1" />
      </UlSt>
    </NavSt>
  );
};

