import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { contentMaxWidth, layoutVerticalPadding } from "../theme";

const ContentRestrictWidth = styled.div`
  padding: ${props => props.paddingTop} 0rem 
           ${props => props.paddingBottom} 0rem;
  max-width: ${props => props.maxWidth}rem;
  text-align: ${props => props.textAlign};
  margin: 0 auto;
  
  display: flex;
  flex-flow: column nowrap;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

/**
 * Acts as a container for laying out content in a column.
 */
const LayoutColumn = (props) => {
  const {
    children, alignItems, justifyContent, textAlign, maxWidth, paddingTop, paddingBottom,
  } = props;
  return (
    <ContentRestrictWidth
      alignItems={alignItems}
      justifyContent={justifyContent}
      textAlign={textAlign}
      maxWidth={maxWidth}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {children}
    </ContentRestrictWidth>
  );
};

LayoutColumn.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
  textAlign: "inherit",
  maxWidth: contentMaxWidth,
  paddingTop: `${layoutVerticalPadding}rem`,
  paddingBottom: `${layoutVerticalPadding}rem`,
};
LayoutColumn.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  textAlign: PropTypes.string,
  maxWidth: PropTypes.number,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
};

export default LayoutColumn;
