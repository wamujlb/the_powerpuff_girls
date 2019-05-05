// @flow
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../../pages/Home";
import Show from "../../pages/Show";
import Episode from "../../pages/Episode";
import NotFound from "../../pages/NotFound";

type Props = {}

class App extends React.PureComponent<Props> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/show" component={Show} />
                    <Route exact path="/show/:season/:episode" component={Episode} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default connect(null, {})(App)