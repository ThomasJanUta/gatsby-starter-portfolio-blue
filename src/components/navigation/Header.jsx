import React from "react";
import Headroom from "react-headroom";
import { Logo, NavList } from "./HeaderElements";

const Header = () => {
  return (
    <Headroom>
      <Logo />
      <NavList />
    </Headroom>
  );
};

export default Header;
