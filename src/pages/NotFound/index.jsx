// @flow
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";

import Layout from "../../components/Layout";
import Main from "../../components/Main";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 24,
    textAlign: "center",
    justifyContent: "center",
  },
});

type Props = {
  classes: Object,
};

const NotFoundPage = ({ classes }: Props): React$ELement<typeof Layout> => {
  return (
    <Layout>
      <Main className={classes.root}>
        <Typography variant="h1" component="h1">
          404
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Page not found
        </Typography>

        <div>
          <Button size="small" color="primary" component={Link} to="/">
            Back to main page
          </Button>
        </div>
      </Main>
    </Layout>
  );
};

export default compose(withStyles(styles))(NotFoundPage);
