import React from "react";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ProjectDetails from "./ProjectDetails";
import styled from "styled-components";
import { ProjectIcon } from "./projectIcon/ProjectIcon";
import ProjectPaper from "./ProjectPaper";

const GridS = styled(Grid)`
  display: flex;
  justify-content: center;
`;

const Project = ({ project }) => {
  return (
    <ProjectPaper>
      <Grid container spacing={2} justify="center">
        <GridS item xs={12} sm={3}>
          <ProjectIcon title={project.title} color={project.color} icon={project.icon} />
        </GridS>
        <Grid item xs={12} sm={9}>
          <ProjectDetails project={project} />
        </Grid>
      </Grid>
    </ProjectPaper>
  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
};
export default Project;