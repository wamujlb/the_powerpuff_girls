// @flow
import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Parser from "html-react-parser";

import Loading from "../../components/Loading";
import ShowInfo from "../../components/Show/Info";
import Main from "../../components/Main";
import Episodes from "../../components/Episodes";

import { loadShow } from "../../actions/show";
import { SHOW_ID } from "../../constants/show";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 24,
    color: "white",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chips: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
  },
  chip: {
    marginRight: theme.spacing.unit,
  },
});

type Props = {
  show: Object,
  episodes: Object,
  loadShow: Function,
};

class Show extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.loadShow(SHOW_ID);
  }

  render() {
    const { classes, show, episodes } = this.props;
    const { data } = show;

    if (show.loading) {
      return <Loading />;
    }

    return (
      data &&
      <Main>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                className={classes.media}
                image={data.image.original}
                title={data.name}
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography variant="h3">
              {data.name}
            </Typography>

            <div className={classes.chips}>
              {data.genres.map((genre, key) =>
                <Chip
                  key={key}
                  label={genre}
                  color="primary"
                  className={classes.chip}
                />
              )}
            </div>

            <div>
              {Parser(data.summary)}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <ShowInfo
              network={data.network}
              schedule={data.schedule}
              status={data.status}
              type={data.type}
              rating={data.rating.average}
            />
          </Grid>

          {episodes.data &&
            <Grid item xs={12}>
              <Episodes episodes={episodes.data} />
            </Grid>}
        </Grid>
      </Main>
    );
  }
}

const mapStateToProps = ({ show, episodes }) => {
  return {
    show,
    episodes,
  };
};

const mapDispatchToProps = dispatch => ({
  loadShow: id => dispatch(loadShow(id)),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Show);
