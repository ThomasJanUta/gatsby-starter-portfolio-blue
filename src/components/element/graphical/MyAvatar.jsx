import React from "react";
import * as PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    height: props => props.height,
    width: props => props.width,
    margin: props => props.margin,
  },
});

function MyAvatar({ src, alt, height, width, margin }) {
  const classes = useStyles({ height, width, margin });

  return (<Avatar src={src} alt={alt} className={classes.avatar} component="div" />);
}

MyAvatar.defaultProps = {
  height: "7rem",
  width: "7rem",
  margin: "0.5rem",
};
MyAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
};

export default MyAvatar;