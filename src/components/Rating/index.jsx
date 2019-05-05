// @flow
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";

type Props = {
  classes: Object,
  value: number,
};

const styles = theme => ({
  wrapper: {
    backgroundColor: lightBlue[100],
    position: "relative",
    width: "100%",
    height: 20,
    borderRadius: 100,
    overflow: "hidden",
  },
  bar: {
    position: "absolute",
    height: "100%",
    backgroundColor: lightBlue[400],
  },
  value: {
    position: "absolute",
    left: 5,
    height: 20,
    lineHeight: "20px",
    color: "white",
    margin: 0,
    fontSize: ".8em",
  },
});

function Rating({ classes, value }: Props): React$Element<typeof List> {
  const maxRating = 10;
  return (
    <div className={classes.wrapper}>
      <div className={classes.bar} style={{ width: `${value * 10}%` }} />
      <p className={classes.value}>{`${value}/${maxRating}`}</p>
    </div>
  );
}

export default withStyles(styles)(Rating);
