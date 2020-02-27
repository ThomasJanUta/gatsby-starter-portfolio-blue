/**
 * Every external / outbound link should be wrapped in <OutboundLink> from "gatsby-plugin-google-analytics" to track every click in Google Analytics
 * @see https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics#outboundlink-component
 */

import React from "react";
import { Link as MuiLink } from "@material-ui/core";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { lightThemedLink, darkThemedLink } from "./InternalRoute";

export const A_REL = {
  DEFAULT: "noopener noreferrer nofollow",
  NOREFERRER: "noopener noreferrer",
  NOFOLLOW: "noopener nofollow",
  ENDORSE: "noopener",
};

const ForwardOutboundLink = React.forwardRef((props, ref) => (
  <OutboundLink {...props} />
));

/**
 * Provides an anchor tag linking to an external site with appropriate styles.<br>
 *   <br>
 * @param href        Required. The external link to direct to.<br>
 * @param caption     Required. The link / route text to display.<br>
 * @param variant     Optional. MUI Typography variant to style. Default: inherit.<br>
 * @param lightTheme  Optional. Dark or light themed routes. Default: Dark.<br>
 * @param target      Optional. HTML <a> tag target attribute. Default: "_blank".<br>
 * @param rel         Optional. HTML <a> tag rel attribute. Default: "noopener noreferrer nofollow".<br>
 */
export const OutboundLinkThemed = ({ href, target, rel, caption, variant, lightTheme }) => {
  let classes = null;

  if (lightTheme === true) classes = lightThemedLink();
  else classes = darkThemedLink();
  const { link } = classes;

  return (
    <MuiLink
      component={ForwardOutboundLink}
      href={href}
      target={target}
      rel={rel}
      variant={variant}
      underline="hover"
      className={link}
    >
      {caption}
    </MuiLink>
  );
};
OutboundLinkThemed.defaultProps = {
  variant: "inherit",
  lightTheme: false,
  target: "_blank",
  rel: A_REL.DEFAULT,
};
OutboundLinkThemed.propTypes = {
  href: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  variant: PropTypes.string,
  lightTheme: PropTypes.bool,
  target: PropTypes.string,
  rel: PropTypes.string,
};


/**
 * Removes link styles. Useful for button or icon links.
 */
const UnstyledOutboundLink = styled(OutboundLink)`
  text-decoration: none;
  color: inherit;
`;
/**
 * Wraps an a tag around a JSX object. Useful for external links using images, icons, buttons.
 * @param children    Required. The object to wrap a link around.<br>
 * @param href        Required. The external link to direct to.<br>
 * @param target      Optional. HTML <a> tag target attribute. Default: "_blank".<br>
 * @param rel         Optional. HTML <a> tag rel attribute. Default: "noopener noreferrer nofollow".<br>
 */
export const OutboundLinkNoStyle = ({ children, href, target, rel }) => (
  <UnstyledOutboundLink
    href={href}
    target={target}
    rel={rel}
  >
    {children}
  </UnstyledOutboundLink>
);
OutboundLinkNoStyle.defaultProps = {
  target: "_blank",
  rel: A_REL.DEFAULT,
};
OutboundLinkNoStyle.propTypes = {
  children: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
};
