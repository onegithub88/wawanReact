import React from 'react';
import PropTypes from 'prop-types';
import Input from './../../element/Input';
import Button from './../../element/Button';
import { Field } from 'redux-form';

export default class Component extends React.Component {
  _renderFormPersonal(){
    return (
      <form name="Person" className="fColumn ml20 mr20 mb25">
        <Field name="firstName" component={Input} label="First Name" placeholder="Enter first name" />
        <Field name="lastName" component={Input} label="Last Name" placeholder="Enter last name" />
        <Field name="email" component={Input} label="Email" placeholder="Enter valid email" />
      </form>
    );
  }

  render() {
    const { handleSubmit, submitting, invalid } = this.props;
    let disabled = invalid || submitting;

    return (
      <div className="FormInputContainer">
        {this._renderFormPersonal()}
        <Button handleSubmit={handleSubmit} buttonName="Submit" disabled={disabled} />
      </div>
    );
  }
}

Component.propTypes = {
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit:PropTypes.func
};