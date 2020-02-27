import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Link as MuiLink } from "@material-ui/core";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import theme, { fontWeightMedium, linkViolet } from "../element/theme";

export const darkThemedLink = makeStyles({
  link: {
    color: theme.palette.secondary.main,
    "&:hover": { color: theme.palette.text.hint, cursor: "pointer" },
    "&:active": { color: theme.palette.text.hint },
  },
});
export const lightThemedLink = makeStyles({
  link: {
    fontWeight: fontWeightMedium,
    color: linkViolet,
    "&:hover": { color: theme.palette.text.hint, cursor: "pointer" },
    "&:active": { color: theme.palette.text.hint },
  },
});
const headerThemedLink = makeStyles({
  link: {
    color: "#fff",
    "&:hover": { color: theme.palette.text.hint, cursor: "pointer" },
    "&:active": { color: theme.palette.text.hint },
  },
});


/**
 * Provides an Oo-themed link (GatsbyLink) intended for internal routing.<br>
 * @param caption     Required. The link / route text to display.<br>
 * @param to          Required. The internal route.<br>
 * @param variant     Optional. MUI Typography variant to style such as body1. Default: inherit.<br>
 * @param lightTheme  Optional. Dark or light themed routes. Default: Dark.<br>
 */
export const InternalRoute = ({ caption, to, variant, lightTheme }) => {
  let classes = null;
  if (lightTheme === true) {
    classes = lightThemedLink();
  } else if (lightTheme === "header") {
    classes = headerThemedLink();
  } else {
    classes = darkThemedLink();
  }

  const { link } = classes;
  return (
    <MuiLink
      component={GatsbyLink}
      to={to}
      variant={variant}
      underline="hover"
      className={link}
    >
      {caption}
    </MuiLink>
  );
};
InternalRoute.defaultProps = {
  variant: "inherit",
  lightTheme: false,
};
InternalRoute.propTypes = {
  caption: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  variant: PropTypes.string,
  lightTheme: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

/**
 * Provides an Oo-themed link intended for button like link text. Useful for showing modals or triggering events.<br>
 * <br>
 * @param href        Required. The external link to direct to.<br>
 * @param caption     Required. The link / route text to display.<br>
 * @param variant     Optional. MUI Typography variant to style. Default: inherit.<br>
 * @param lightTheme  Optional. Dark or light themed routes. Default: Dark.<br>
 */
export const ThemedLink = ({ caption, variant, lightTheme }) => {
  let classes = null;

  if (lightTheme === true) classes = lightThemedLink();
  else classes = darkThemedLink();
  const { link } = classes;

  return (
    <MuiLink
      variant={variant}
      underline="hover"
      className={link}
      component="a"
    >
      {caption}
    </MuiLink>
  );
};
ThemedLink.defaultProps = {
  variant: "inherit",
  lightTheme: false,
};
ThemedLink.propTypes = {
  caption: PropTypes.string.isRequired,
  variant: PropTypes.string,
  lightTheme: PropTypes.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};
