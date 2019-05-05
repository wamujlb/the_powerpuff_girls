// @flow
import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

type Props = {
  icon: React.Node,
  primaryText: string,
  secondaryText: string,
};

const Item = ({
  icon,
  primaryText,
  secondaryText,
}: Props): React$Element<typeof ListItem> => {
  const Icon = icon;
  return (
    <ListItem>
      <Avatar>
        <Icon />
      </Avatar>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};

export default Item;
