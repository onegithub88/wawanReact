import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Component extends React.Component {
  _handleChangeRadio(id){
    const { handleChange } = this.props;

    return() => {
      if (handleChange){
        handleChange(id);
      }
    };
  }
  render() {
    const { dataRadio } = this.props;

    if (!dataRadio) return null;

    return (
      <div className={`fRow boxBreadCrumb mdBold xslabel mt20 fullWidth mb10 fjCenter mb20`}>
        {dataRadio.map((radio,i)=>(
          <div key={i} className="fRow radioItem faCenter mr20">
            <div onClick={this._handleChangeRadio(radio.id)}className="radioSelect">
              <div className={['radioCircle',radio.active ? 'radioCircleActive' : '' ].join(' ')} />
            </div>
            <label className="smlabel">{radio.name}</label>
          </div>
        ))}
      </div>
    );
  }
}

Component.propTypes = {
  dataRadio:PropTypes.array,
  handleChange:PropTypes.func
};