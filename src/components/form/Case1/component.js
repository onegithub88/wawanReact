import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Radio from './../../element/RadioButton';
import Const from './../../../const';
import Person from './../Person';
import Company from './../Company';


export default class Component extends React.Component {
  _formChange(id){
    const { dispatch, commonDispatch } = this.props;
    commonDispatch(dispatch,{ id:id },Const.CHANGE_FORM);
  }

  render() {
    const { dataRadio, handleSubmitPerson, handleSubmitCompany, activeForm } = this.props;

    return (
      <div className={`fColumn formContainer pd10 mt10 bgWhite rad10 shadow5`}>
        <div className="fRow fjCenter fullWidth mt20 mb15">
          <label className="md3label mdBold">Form Pengisian Data</label>
        </div>
        <div className="fRow ml20">
          <Radio handleChange={this._formChange.bind(this)} dataRadio={dataRadio} />
        </div>
        {activeForm=='Person' ? 
          <Person handleSubmit={handleSubmitPerson} />:
          <Company handleSubmit={handleSubmitCompany} /> 
        }
      </div>
    );
  }
}

Component.propTypes = {
  dataRadio:PropTypes.array,
  commonDispatch:PropTypes.func,
  dispatch:PropTypes.func,
  activeForm:PropTypes.string,
  handleSubmitPerson:PropTypes.func,
  handleSubmitCompany:PropTypes.func,
};