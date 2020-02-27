import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

export const InnerColumnContainer = styled.div`
  height: 100%;
  text-align: center;
  vertical-align: middle;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: 0 0.5rem;
  
  display: flex; 
  flex-flow: column nowrap;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

/**
 * Page-wide base layout for content elements. <br>
 * Only refactor with massive testing! Almost all pages implement this.
 * @param props.alignItems optional. CSS property as String.
 * @param props.justifyContent optional. CSS property as String.
 */
const LayoutSetBackground = (props) => {
  const { children, alignItems, justifyContent, backgroundColor, color } = props;
  return (
    <InnerColumnContainer alignItems={alignItems}
                          justifyContent={justifyContent}
                          backgroundColor={backgroundColor}
                          color={color}>
      {children}
    </InnerColumnContainer>
  );
};

LayoutSetBackground.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "inherit",
  color: "inherit",
};
LayoutSetBackground.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default LayoutSetBackground;
