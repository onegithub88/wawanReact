import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Component extends React.Component {
  render() {
    const { breadCrumb } = this.props;
    return (
      <div className={`fColumn boxBreadCrumb mdBold xslabel mt20`}>
        <label className="">{breadCrumb}</label>
      </div>
    );
  }
}

Component.propTypes = {
  breadCrumb:PropTypes.string,
};