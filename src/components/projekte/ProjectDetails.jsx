import React from "react";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TagChips from "./TagChips";
import ProjectLinks from "./ProjectLinks";
import ProjectLearning from "./ProjectLearning";
import styled from "styled-components";

export const AnnotationContainer = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
`;

const txt = ["Technologies"];

const ProjectDetails = ({project}) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>{project.title}</Typography>
      <ProjectLinks status={project.status} url={project.url} github={project.github} />
      <Typography variant="body1" paragraph>{project.description}</Typography>
      <ProjectLearning learning={project.learning} />
      <Typography variant="body2">{txt[0]}</Typography>
      <TagChips tags={project.tags} />
    </>
  );
};
ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
};
export default ProjectDetails;