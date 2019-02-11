import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class Component extends React.Component {
  render() {
    const { imageSlide, handleSetSlideScroll } =this.props;
    if (!imageSlide) return null;

    return(
      <div ref={(ref)=>handleSetSlideScroll(ref)} 
        className={`fColumn formDisplay bgWhite rad10 shadow5`}>
        <div className="fRow boxSlide">
          {imageSlide.map((image,i)=>(
            <img key={i} className="imageSlide" src={image} />
          ))}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  imageSlide:PropTypes.array,
  slideScroll:PropTypes.object,
  handleSetSlideScroll:PropTypes.func
};