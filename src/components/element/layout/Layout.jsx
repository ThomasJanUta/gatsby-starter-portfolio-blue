import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../../navigation/Header";
import Footer from "../../navigation/Footer";
import { HeroStatic } from "../../hero/Hero";

const PageContainer = styled.div`
  height: 100%;
  min-height: calc(100vh);
  
  display: flex; 
  flex-direction: column;
`;

/**
 * Fundamental layout which provides Header and Footer in a column style.
 */
const Layout = ({ children, showSideSvg }) => {
  return (
    <PageContainer>
      <Header />

      {showSideSvg && <HeroStatic />}
      {children}

      <Footer />
    </PageContainer>
  );
};
Layout.defaultProps = {
  showSideSvg: false,
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSideSvg: PropTypes.bool,
};
export default Layout;
