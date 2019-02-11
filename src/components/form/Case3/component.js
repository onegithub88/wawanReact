import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import PairString from './../PairString';

export default class Component extends React.Component {
  render() {
    return (
      <div className={`fColumn formContainer pd10 mt10 bgWhite rad10 shadow5`}>
        <div className="fRow fjCenter fullWidth mt20 mb15">
          <label className="md3label mdBold">Membandingkan String</label>
        </div>
        <PairString /> 
      </div>
    );
  }
}

Component.propTypes = {
  data: PropTypes.array
};