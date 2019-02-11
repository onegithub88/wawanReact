import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Component extends React.Component {
  _handleNextSlide(nav){
    const { handleNavSlide } = this.props;
    return ()=>{
      if (handleNavSlide){
        handleNavSlide(nav);
      }
    };
  }

  render() {
    const { imgNavigate } = this.props;

    return(
      <div className={`fCol boxControl1 pd10 mt20 mr10 bgWhite rad10 shadow5`}>
        <div className="fRow fjBetween fullWidth">
          <button onClick={this._handleNextSlide('prev')} className="ButtonControl">
            <img className="imagesControl" src={imgNavigate[0]} />
          </button>
          <button onClick={this._handleNextSlide('next')} className="ButtonControl">
            <img className="imagesControl" src={imgNavigate[1]} />
          </button>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  imgNavigate:PropTypes.array,
  handleNavSlide:PropTypes.func
};