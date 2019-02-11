import React from 'react';
import PropTypes from 'prop-types';
import Input from './../../element/Input';
import Button from './../../element/Button';
import { Field } from 'redux-form';

export default class Component extends React.Component {
  _renderFormCompany(){
    return (
      <form name="Person" className="fColumn ml20 mr20 mb25">
        <Field name="companyName" component={Input} label="Company Name" placeholder="Enter company name" />
        <Field name="companyPhone" component={Input} label="Company Phone" placeholder="Enter phone number" />
      </form>
    );
  }

  render() {
    const { handleSubmit, submitting, invalid } = this.props;
    let disabled = invalid || submitting;

    return (
      <div className="FormInputContainer">
        {this._renderFormCompany()}
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