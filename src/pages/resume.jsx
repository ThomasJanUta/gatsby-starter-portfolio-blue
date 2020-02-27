import React from "react";
import Layout from "../components/element/layout/Layout";
import { graphql } from "gatsby";
import * as PropTypes from "prop-types";
import LayoutColumn from "../components/element/layout/LayoutColumn";
import { contentMaxWidthText } from "../components/element/theme";
import Typography from "@material-ui/core/Typography";
import { ContentDiv } from "../components/element/layout/ContentContainers";
import SEO from "../components/element/seo/SEO";

const seo = {
  title: "Resume",
  description: null,
};

const Resume = (props) => {
  const { data: { allFile: { edges } } } = props;
  const { node: { childMarkdownRemark: { frontmatter, html } } } = edges[0];

  return (
    <Layout showSideSvg>
      <SEO {...seo} />
      <LayoutColumn justifyContent="center"
                    textAlign="left"
                    maxWidth={contentMaxWidthText}>
        <ContentDiv>

          <Typography variant="h2" style={{ marginBottom: "3rem" }}>Resume</Typography>
          <Typography component="span">
            <div className="lebenslauf"
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
      name: {eq: "resume"}, 
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

Resume.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Resume;