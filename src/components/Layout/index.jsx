// @flow
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Header";

type Props = {
  classes: Object,
  network: Object,
  schedule: Object,
  status: string,
  type: string,
  rating: Object,
};

const styles = theme => ({
  layout: {
    width: "auto",
  },
});

function Layout({ classes, children }: Props): React$Element<typeof List> {
  return (
    <div className={classes.layout}>
      <Header />
      {children}
    </div>
  );
}

export default withStyles(styles)(Layout);
