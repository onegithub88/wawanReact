import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Component extends React.Component {
  _handleSubmit(){
    const { handleSubmit } = this.props;
    
    return()=>{
      if (handleSubmit){
        handleSubmit();
      }
    };
  }
  render() {
    const { buttonName, disabled } = this.props;
    return (
      <div className={`fRow`}>
        <button onClick={this._handleSubmit()} className="boxButton" disabled={disabled}>{buttonName}</button>
      </div>
    );
  }
}

Component.propTypes = {
  handleSubmit:PropTypes.func,
  buttonName:PropTypes.string,
  disabled:PropTypes.bool
};