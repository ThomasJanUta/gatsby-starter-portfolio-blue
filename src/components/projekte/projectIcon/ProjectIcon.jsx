import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { backgroundThemeBlue } from "../../element/theme";


const SvgS = styled.svg`
  max-width: 12rem;
`;

export const ProjectIcon = ({ title, icon, color }) => {
  return (
    <SvgS xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="100%"
          aria-labelledby="title">
      <title id="title">{title}</title>
      <path fill={backgroundThemeBlue} stroke={color} strokeWidth={6}
            d="M4,32L18,7.8h28L60,32L46,56.2H18L4,32z" />
      <text fill={color} fontWeight="bold" textAnchor="middle"
            x="50%" y="50%" dominantBaseline="middle">
        {icon}
      </text>
    </SvgS>
  );
};
ProjectIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
