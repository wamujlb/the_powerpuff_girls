// @flow
import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import { withRouter, Redirect, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Parser from "html-react-parser";

import Loading from "../../components/Loading";
import Main from "../../components/Main";
import { loadEpisode } from "../../actions/episode";
import { SHOW_ID } from "../../constants/show";
import episodeNoPhoto from "../../assets/img/episodeNoPhoto.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 24,
    color: "white",
  },
});

type Props = {
  episodes: Object,
  match: Object,
};

class Episode extends React.PureComponent<Props> {
  componentDidMount() {
    const { season, episode } = this.props.match.params;
    this.props.loadEpisode(SHOW_ID, season, episode);
  }

  render() {
    const { classes, episode } = this.props;
    const { data } = episode;

    // Show loading on loading
    if (episode.loading) {
      return <Loading />;
    }

    // Redirect to NotFound page
    if (episode.error) {
      return <Redirect to="/404" />;
    }

    return (
      data &&
      <Main>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                className={classes.media}
                image={data.image ? data.image.original : episodeNoPhoto}
                title={data.name}
              />
              <CardContent>
                <Typography variant="h4" component="h4">
                  {data.name}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  {`Season: ${data.season}, episode: ${data.number}`}
                </Typography>

                <Typography variant="body1" component="div">
                  {Parser(data.summary)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to="/show"
                >
                  All episodes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Main>
    );
  }
}

const mapStateToProps = ({ episode }) => {
  return {
    episode,
  };
};

const mapDispatchToProps = dispatch => ({
  loadEpisode: (id, season, episode) =>
    dispatch(loadEpisode(id, season, episode)),
});

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Episode);
