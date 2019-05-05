// @flow
import React from "react";
import { withStyles } from "@material-ui/core/styles";

type Props = {
  classes: Object,
  className: string,
  network: Object,
  schedule: Object,
  status: string,
  type: string,
  rating: Object,
};

const styles = theme => ({
  main: {
    width: "auto",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1280 + theme.spacing.unit * 3 * 2)]: {
      width: 1280,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Main({ classes, children, className }: Props): React$Element<typeof List> {
  return (
    <div className={`${classes.main} ${className}`}>
      {children}
    </div>
  );
}

export default withStyles(styles)(Main);
