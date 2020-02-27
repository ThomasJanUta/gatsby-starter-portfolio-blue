import React from "react";
import Layout from "../components/element/layout/Layout";
import LayoutColumn from "../components/element/layout/LayoutColumn";
import { contentMaxWidthText } from "../components/element/theme";
import Typography from "@material-ui/core/Typography";
import { ContentDiv } from "../components/element/layout/ContentContainers";
import { graphql } from "gatsby";
import * as PropTypes from "prop-types";
import SEO from "../components/element/seo/SEO";

const seo = {
  title: "Legal",
  description: null,
};

const Legal = (props) => {
  const { data: { allFile: { edges } } } = props;
  const { node: { childMarkdownRemark: { frontmatter, html } } } = edges[0];

  return (
    <Layout showSideSvg>
      <SEO {...seo} />
      <LayoutColumn justifyContent="center"
                    textAlign="left"
                    maxWidth={contentMaxWidthText}>
        <ContentDiv>

          <Typography component="span">
            <div className="blog-post"
                 dangerouslySetInnerHTML={{ __html: html }} />
          </Typography>

        </ContentDiv>
      </LayoutColumn>
    </Layout>
  );
};
// noinspection JSUnusedGlobalSymbols
export const legalNoticeQuery = graphql`
{
  allFile(
    filter: {
      internal: {
        mediaType: {eq: "text/markdown"}}, 
      name: {eq: "legal"}, 
      sourceInstanceName: {eq: "static"}}) {
    edges {
      node {
        childMarkdownRemark {
          html
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
}
`;
Legal.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Legal;