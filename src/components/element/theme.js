import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

/**
 * Standardized width intended for content within the website.
 * Narrower width improves readability.
 * The ideal line length is 40-60 characters per line for English body text.
 * @see: https://material.io/design/typography/understanding-typography.html#readability
 **/
export const contentMaxWidth = 70;
export const contentMaxWidthText = 44;
export const contextMaxWidthNarrow = 32;

/**
 * Layout constants
 */
export const layoutVerticalPadding = 5;

/** --- thomasuta.de color palette --- */
export const backgroundThemeBlue = "#292D35";
export const footerBackground = "#001935";
export const linkViolet = "#4600C8";


/** Properties to customize Material UI Typography. */
export const pxToRem = value => `${value / 16}rem`;
export const remToPx = value => `${value * 16}px`;
export const fontWeightLight = 300;
export const fontWeightRegular = 400;
export const fontWeightMedium = 500;
export const fontWeightBold = 600; // custom attribute


/** --- Material UI theme objects ---
 * Overriding styles: @see https://github.com/mui-org/material-ui/issues/11244#issuecomment-386792253
 */
const createdBreakpoints = createBreakpoints({});
const themeObject = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    type: "dark",
    background: {
      paper: "#190555",
      default: "#141821",
    },
    action: {
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
    primary: {
      light: "#727ea0",
      main: "#455271",
      dark: "#1a2a46",
      contrastText: "#fff",
    },
    secondary: {
      light: "#5ffbdf",
      main: "#00c7ad",
      dark: "#00957e",
      contrastText: "#1f1f1f",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#03dac4",
      disabled: "#b4b4b4",
      hint: "#00B2CC",
    },
  },
  overrides: {
    MuiTypography: {
      /**
       * Responsive Typography:
       * @see https://stackoverflow.com/questions/52472372/responsive-typography-in-material-ui
       *
       * Material Design specification:
       * @see Material Design: https://material.io/design/typography/the-type-system.html#type-scale
       *
       * @see MUI default values: node_modules\@material-ui\core\styles\createTypography.js
       var nextVariants = {
          //  buildVariant(fontWeight, size, lineHeight, letterSpacing)
          h1: buildVariant(fontWeightLight, 96, 1, -1.5),
          h2: buildVariant(fontWeightLight, 60, 1, -0.5),
          h3: buildVariant(fontWeightRegular, 48, 1.04, 0),
          h4: buildVariant(fontWeightRegular, 34, 1.17, 0.25),
          h5: buildVariant(fontWeightRegular, 24, 1.33, 0),
          h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
          subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
          subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
          body1Next: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
          body2Next: buildVariant(fontWeightRegular, 14, 1.5, 0.15),
          buttonNext: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
          captionNext: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
          overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
        };
       * letterSpacing: space between letters in a word
       */
      h1: {
        fontWeight: fontWeightLight,
        fontSize: pxToRem(72),  // 96 customized
        [createdBreakpoints.down("xs")]: { fontSize: pxToRem(48) }, // 96 * 0.5
        lineHeight: 1,
        letterSpacing: -1.5,
      },
      h2: {
        fontWeight: fontWeightLight,
        fontSize: pxToRem(48),  // 60 customized
        [createdBreakpoints.down("xs")]: { fontSize: pxToRem(36) }, // 48 * 0.75
        lineHeight: 1,
        letterSpacing: -0.5,
      },
      h3: {
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(36),  // 48 customized
        [createdBreakpoints.down("xs")]: { fontSize: pxToRem(30) }, // 34 * 0.75
        lineHeight: 1.04,
        letterSpacing: 0,
      },
      h4: {
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(28),  // 34 customized
        [createdBreakpoints.down("xs")]: { fontSize: pxToRem(27) },
        lineHeight: 1.17,
        letterSpacing: 0.25,
      },
      h5: {
        fontWeight: fontWeightMedium,  // fontWeightRegular customized
        fontSize: pxToRem(24),
        lineHeight: 1.33,
        letterSpacing: 0,
      },
      h6: {
        fontWeight: fontWeightMedium,
        fontSize: pxToRem(21),
        lineHeight: 1.6,
        letterSpacing: 0.15,
      },
      subtitle1: {
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(18),
        lineHeight: 1.75,
        letterSpacing: 0.15,
      },
      subtitle2: {
        fontWeight: fontWeightMedium,  // fontWeightRegular customized
        fontSize: pxToRem(18),   // 16 customized
        lineHeight: 1.57,
        letterSpacing: 0.1,
      },
      body1: {
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(16),
        lineHeight: 1.7,               // 1.5 customized
        letterSpacing: 0.15,
      },
      body2: {
        fontWeight: fontWeightMedium,  // fontWeightRegular customized
        fontSize: pxToRem(16),   // 14 customized
        lineHeight: 1.6,
        letterSpacing: 0.15,
      },
      button: {
        fontWeight: fontWeightMedium,
        fontSize: pxToRem(16),  // 14 customized
        lineHeight: 1.75,
        letterSpacing: 0.4,
      },
      caption: {
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(14),  // 12 customized
        lineHeight: 1.66,
        letterSpacing: 0.4,
      },
      overline: {
        fontWeight: fontWeightRegular,
        fontSize: pxToRem(14),  // 12 customized
        lineHeight: 2.66,
        letterSpacing: 1,
      },
    },
  },
};
const theme = createMuiTheme(themeObject);
export default theme;
