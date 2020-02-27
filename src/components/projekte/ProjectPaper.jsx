import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import oberionTheme, {backgroundThemeBlue} from "../element/theme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "1rem 1rem 1.5rem 1rem",
    margin: "2rem auto",
    backgroundColor: backgroundThemeBlue,
    color: oberionTheme.palette.text.primary,
  },
});

function ProjectPaper({children}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={5}>
      {children}
    </Paper>
  );
}

export default ProjectPaper;