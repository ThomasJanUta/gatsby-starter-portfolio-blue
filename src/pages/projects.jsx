import React from "react";
import Layout from "../components/element/layout/Layout";
import LayoutColumn from "../components/element/layout/LayoutColumn";
import Typography from "@material-ui/core/Typography";
import { ContentDiv } from "../components/element/layout/ContentContainers";
import { data } from "../../content/projects/project-data";
import Project from "../components/projekte/Project";
import styled from "styled-components";
import SEO from "../components/element/seo/SEO";

const LayoutContainer = styled.div`
  margin: 3rem 0 0 0;
`;

const seo = {
  title: "Projects",
  description: null,
};

const Projects = () => {
  return (
    <Layout showSideSvg>
      <SEO {...seo} />
      <LayoutColumn alignItems="flex-start"
                    textAlign="left">
        <ContentDiv>

          <Typography variant="h2">Projects</Typography>
          <LayoutContainer>
            {data.map(element => (
              <Project project={element} key={element.title} />
            ))}
          </LayoutContainer>

        </ContentDiv>
      </LayoutColumn>
    </Layout>
  );
};

export default Projects;