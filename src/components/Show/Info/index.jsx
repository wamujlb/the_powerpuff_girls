// @flow
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Schedule from "@material-ui/icons/Schedule";
import Public from "@material-ui/icons/Public";
import Done from "@material-ui/icons/Done";
import Movie from "@material-ui/icons/Movie";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import lightBlue from "@material-ui/core/colors/lightBlue";

import Item from "./Item";
import Rating from "../../Rating";

type Props = {
  classes: Object,
  network: Object,
  schedule: Object,
  status: string,
  type: string,
  rating: Object,
};

const styles = theme => ({
  cardHeader: {
    backgroundColor: lightBlue[500],
  },
  title: {
    color: "white",
  },
  avatar: {
    backgroundColor: "white",
    color: lightBlue[500],
  },
});

function ShowInfo({
  classes,
  network,
  schedule,
  status,
  type,
  rating,
}: Props): React$Element<typeof List> {
  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="Info" className={classes.avatar}>
            I
          </Avatar>
        }
        title={
          <Typography className={classes.title} variant="h5">
            Info
          </Typography>
        }
      />

      <List>
        <Item
          icon={Public}
          primaryText={network.name}
          secondaryText="Network"
        />
        <Item
          icon={Schedule}
          primaryText={`${schedule.time} (${schedule.days.join()})`}
          secondaryText="Schedule"
        />
        <Item icon={Done} primaryText={status} secondaryText="Status" />
        <Item icon={Movie} primaryText={type} secondaryText="Type" />
      </List>

      <CardContent>
        <Rating value={rating} />
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(ShowInfo);
