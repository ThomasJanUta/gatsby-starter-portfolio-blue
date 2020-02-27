/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Svg from "./Svg";
import { UpDown, UpDownWide } from "./Animations";
import { tailwindThemeColors as c } from "./tailwind-colors";
import styled from "styled-components";

const HeroContainerAnimated = styled.div`
  z-index: -100;
  max-height: 80vh;
`;

export const HeroAnimated = () => (
  <HeroContainerAnimated>
    <UpDown>
      <Svg icon="triangle" hiddenMobile width="8rem" stroke color={c.icon_orange} left="5%"
           top="25%" />
      <Svg icon="hexa" width="8rem" stroke color={c.icon_red} left="60%" top="65%" />
      <Svg icon="box" width="2rem" color={c.icon_darker} left="60%" top="15%" />
      <Svg icon="circle" hiddenMobile width="2rem" color={c.icon_green} left="95%" top="15%" />
      <Svg icon="circle" hiddenMobile width="3rem" color={c.icon_darker} left="90%" top="95%" />
    </UpDown>
    <UpDownWide>
      <Svg icon="arrowUp" hiddenMobile width="5rem" color={c.icon_blue} left="80%" top="10%" />
      <Svg icon="triangle" hiddenMobile width="4rem" stroke color={c.icon_brightest} left="90%"
           top="50%" />
      <Svg icon="triangle" width="5rem" stroke color={c.icon_darkest} left="30%" top="65%" />
      <Svg icon="cross" width="5rem" stroke color={c.icon_pink} left="71%" top="30%" />
      <Svg icon="circle" width="2rem" color={c.icon_darkest} left="75%" top="10%" />
      <Svg icon="upDown" hiddenMobile width="3rem" color={c.icon_darkest} left="45%" top="10%" />
    </UpDownWide>
    <Svg icon="circle" width="2rem" color={c.icon_darkest} left="4%" top="20%" />
    <Svg icon="circle" width="4rem" color={c.icon_darkest} left="50%" top="60%" />
    <Svg icon="upDown" hiddenMobile width="3rem" color={c.icon_darkest} left="90%" top="90%" />
    <Svg icon="upDown" hiddenMobile width="5rem" color={c.icon_darker} left="25%" top="80%" />
    <Svg icon="triangle" width="3rem" stroke color={c.icon_darker} left="25%" top="5%" />
    <Svg icon="box" hiddenMobile width="10rem" color={c.icon_purple} left="10%" top="65%" />
    <Svg icon="box" width="2rem" color={c.icon_darkest} left="10%" top="10%" />
    <Svg icon="box" width="4rem" color={c.icon_darkest} left="40%" top="30%" />
    <Svg icon="hexa" width="5rem" stroke color={c.icon_darker} left="10%" top="50%" />
    <Svg icon="hexa" width="3rem" stroke color={c.icon_darker} left="80%" top="70%" />
  </HeroContainerAnimated>
);

const HeroContainerStatic = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -100;
`;

export const HeroStatic = ({ children }) => (
  <HeroContainerStatic>
    <Svg icon="triangle" hiddenMobile width="3rem" stroke color={c.icon_orange} left="5%"
         top="35%" />
    <Svg icon="circle" hiddenMobile width="2rem" color={c.icon_green} left="95%" top="3%" />
    <Svg icon="triangle" hiddenMobile width="2rem" stroke color={c.icon_brightest} left="90%"
         top="50%" />
    <Svg icon="cross" hiddenMobile width="3rem" stroke color={c.icon_pink} left="95%" top="30%" />
    <Svg icon="circle" width="2rem" color={c.icon_darkest} left="75%" top="10%" />
    <Svg icon="circle" width="2rem" color={c.icon_darkest} left="14%" top="20%" />
    <Svg icon="upDown" hiddenMobile width="3rem" color={c.icon_darkest} left="90%" top="90%" />
    <Svg icon="triangle" width="3rem" stroke color={c.icon_darker} left="5%" top="5%" />
    <Svg icon="box" hiddenMobile width="3rem" color={c.icon_purple} left="5%" top="65%" />
    <Svg icon="box" width="2rem" color={c.icon_darkest} left="10%" top="80%" />
    <Svg icon="hexa" width="5rem" stroke color={c.icon_darker} left="85%" top="85%" />
  </HeroContainerStatic>
);
