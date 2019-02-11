import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import pages from './pages';
import Const from './const';
import Store from './redux/Store';
import History from './History';

export default class Routers extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Router history={History}>
            <Switch>
            <Route exact path={Const.HOME} component={pages.Home} />
            </Switch>
        </Router>
      </Provider>
    );
  }
}