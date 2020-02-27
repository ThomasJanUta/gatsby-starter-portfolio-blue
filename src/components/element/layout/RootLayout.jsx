import React from "react";
import * as PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import "../styles.css";

export default function RootLayout({ children, className }) {
  return (
<>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={className}>{children}</main>
      </ThemeProvider>
</>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};



