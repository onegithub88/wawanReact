import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routers from './Routers';
import './styles/commonStyles.css';
export default class App extends React.Component {
  render() {
    return (
        <Routers/>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};