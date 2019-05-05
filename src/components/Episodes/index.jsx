import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import episodeNoPhoto from "../../assets/img/episodeNoPhoto.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  image: {
    width: "100%",
  },
  title: {
    color: "white",
  },
  gridLink: {
    display: "block",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});

type Props = {
  episodes: Array<Object>,
};

function SingleLineGridList({ episodeName, episodes, classes }: Props) {
  const getUrl = (season: number, episode: number): string => {
    return `/show/${season}/${episode}`;
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" paragraph>
        All Episodes
      </Typography>
      <GridList className={classes.gridList} cols={2.5} cellHeight="auto">
        {episodes.map((episode, key) =>
          <GridListTile key={key}>
            <Link
              to={getUrl(episode.season, episode.number)}
              className={classes.gridLink}
            >
              <img
                src={episode.image ? episode.image.medium : episodeNoPhoto}
                alt={episode.name}
                className={classes.image}
              />
              <GridListTileBar
                title={`${episode.number}. ${episode.name}`}
                subtitle={`Season ${episode.season}`}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </Link>
          </GridListTile>
        )}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(SingleLineGridList);
