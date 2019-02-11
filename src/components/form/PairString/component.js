import React from 'react';
import PropTypes from 'prop-types';
import InputPair from './../../element/InputPair';
import { Field } from 'redux-form';

export default class Component extends React.Component {
  _renderPairString(){
    return (
      <form name="pairString" className="fColumn ml20 mr20 mb30">
        <Field name="string1" component={InputPair} label="String 1" placeholder="Enter string 1" />
        <Field name="string2" component={InputPair} label="String 2" placeholder="Enter string 2" />
      </form>
    );
  }

  render() {
    const { submitting, invalid, anyTouched } = this.props;
    let notMatch = invalid || submitting;

    return (
      <div className="FormInputContainer">
        {this._renderPairString()}
        {anyTouched ? notMatch ?
          <div className="fRow fjCenter lglabel cRed mdBold">String Not Match !</div> :
          <div className="fRow fjCenter lglabel cBlue mdBold">Good! String Match</div>
          :[]
        }
      </div>
    );
  }
}

Component.propTypes = {
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  anyTouched:PropTypes.bool
};