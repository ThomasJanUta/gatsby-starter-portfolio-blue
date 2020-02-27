import React from "react";
import { Helmet } from "react-helmet";
import * as PropTypes from "prop-types";

/**
 * Provides meta tags for each page
 * @see https://www.gatsbyjs.org/docs/add-seo-component/
 * @see https://reactgo.com/react-seo-helmet/
 */
const SEO = ({ title, description }) => (
  <Helmet title={title}>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: "Oberion",
  description: null,
};
