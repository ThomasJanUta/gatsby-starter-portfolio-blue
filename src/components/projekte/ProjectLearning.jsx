import React from "react";
import * as PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const LearningContainer = styled.div`
  margin: 1rem 0;
`;
const LearningPoint = styled.ul`
  list-style-type: square;
  padding: 0 1.5rem;
  margin-block-start: 0;
  margin-block-end: 0;
`;
const txt = ["Learning"];

const ProjectLearning = ({ learning }) => {
  return (
    <LearningContainer>
      <Typography variant="body2">{txt[0]}</Typography>
      <LearningPoint>
        {learning.map((element, index) => (
          <li key={index}>
            <Typography variant="caption">
              {element}
            </Typography>
          </li>
        ))}
      </LearningPoint>
    </LearningContainer>
  );
};

ProjectLearning.propTypes = {
  learning: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectLearning;