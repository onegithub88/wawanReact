import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Component extends React.Component {
  render() {
    const { input, type, meta:{ error }, label, placeholder } = this.props;
    let showError = typeof(error)=='string';

    return (
      <div className="fRow fjStart mb10 faCenter">
        <label className="w30 mdBold xslabel">{label}</label>
        <div className="fColumn fullWidth">
          <input 
            {...input}
            placeholder={placeholder} 
            className="inputControl w100 mb5" 
            type={type}
          />
          {showError ? 
            <span className="fRow fjStart xslabel fExo smBold cRed">{error}</span>
            : []
          }
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  input:PropTypes.object,
  label:PropTypes.string,
  placeholder:PropTypes.string,
  type: PropTypes.string,
  meta:PropTypes.object,
  disabled:PropTypes.bool
};