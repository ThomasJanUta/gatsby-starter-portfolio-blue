import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { A_REL } from "../navigation/ExternalLink";
import { technologyTags as t } from "../../../content/projects/technology-tags";

const MyChip = styled.a`
  margin: 0.4rem 0.5rem 0 0;
  padding: 0.5rem;
  background-color: ${props => props.backgroundcolor} !important;
  color: ${props => props.textcolor};
  border: none;
  cursor: pointer;
  height: 1.5rem;
  display: inline-flex;
  outline: 0;
  font-size: 0.8125rem;
  box-sizing: border-box;
  align-items: center;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  white-space: nowrap;
  border-radius: 1rem;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
`;

const TagChips = ({ tags }) => {
  return (
    <>
      {tags.map(element => (
        <MyChip href={element.url}
                target="_blank"
                rel={A_REL.DEFAULT}
                key={element.caption}
                backgroundcolor={element.backgroundColor}
                textcolor={element.textColor}>
          {element.caption}
        </MyChip>
      ))}
    </>
  );
};
TagChips.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    caption: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default TagChips;