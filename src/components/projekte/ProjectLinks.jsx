import React from "react";
import * as PropTypes from "prop-types";
import { A_REL, OutboundLinkThemed } from "../navigation/ExternalLink";
import { AnnotationContainer } from "./ProjectDetails";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const TypoS = styled(Typography)`
  color: ${props => props.text_color};
`;

const ProjectLinks = ({status, url, github }) => {
  return (
      <AnnotationContainer>
        <TypoS variant="caption" text_color={status.color}>{status.caption}</TypoS>
        {url && <OutboundLinkThemed caption="Webseite" href={url} rel={A_REL.ENDORSE}
                                    variant="caption" />}
        {github && <OutboundLinkThemed caption="GitHub" href={github} rel={A_REL.ENDORSE}
                                       variant="caption" />}
      </AnnotationContainer>
  );
};

ProjectLinks.propTypes = {
  status: PropTypes.shape({
    color: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectLinks;