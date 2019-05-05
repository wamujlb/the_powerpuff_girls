// @flow
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progressWrapper: {
    minHeight: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

type Props = {
  classes: Object,
};

function Loading({ classes }: Props): React$Element<"div"> {
  return (
    <div className={classes.progressWrapper}>
      <CircularProgress />
    </div>
  );
}

export default withStyles(styles)(Loading);
