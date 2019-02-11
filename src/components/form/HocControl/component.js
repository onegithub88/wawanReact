import React from 'react';
import LeftArrow from './../../../asset/images/left-arrow.png';
import RightArrow from './../../../asset/images/right-arrow.png';
import Slide1 from './../../../asset/images/slide/slide1.jpg';
import Slide2 from './../../../asset/images/slide/slide2.jpg';
import Slide3 from './../../../asset/images/slide/slide3.jpg';
import { findDOMNode } from 'react-dom';

const HocControl = (PewarisComponent) =>{
  class HocClass extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        slideScroll:React.createRef,
        activeControl:1,
        imgNavigate:[LeftArrow,RightArrow],
        imageSlide:[Slide1,Slide2,Slide3]
      };
      this.slideScroll= React.createRef();
    }  
    
    _handleSetSlideScroll(ref){
      const { slideScroll } = this.state;
      if (!slideScroll.current){
        slideScroll.current = ref;
        this.setState({ slideScroll });
      }
    }
    stepLength = 0;
    stepNav    = 0;
    _handleNavSlide(nav){
      let { slideScroll, imageSlide } = this.state;
      let element       = findDOMNode(slideScroll.current);
      let slideLength   = imageSlide.length;
      let movStep = 750;
      let stepWidth = movStep*slideLength;
      if (nav=='next'){
        this.stepNav++;
        if (this.stepLength==stepWidth){
          this.stepLength  = this.stepLength;
        }else{
          this.stepLength+=movStep;
        }
      }else if (nav=='prev') {
        if (this.stepLength<=movStep){
          this.stepLength   = 0;
        } else {
          this.stepNav++;
          this.stepLength-=movStep;
        }
      }
      let slideAnimation = () => {
        if (nav=='next' && slideLength){
          element.scrollLeft += 20;
          if (element.scrollLeft <= this.stepLength){
            setTimeout(slideAnimation,2);
          } 
        }else if (nav=='prev'){
          element.scrollLeft -= 20;
          if (element.scrollLeft > this.stepLength){
            setTimeout(slideAnimation,2);
          } 
        }
      };
      slideAnimation();
    }

    render() {
      const { activeControl, imageSlide, imgNavigate, objectCoordinat } = this.state;
      const { props } = this;
      return(
        <PewarisComponent
          {...props}
          handleNavSlide={this._handleNavSlide.bind(this)}
          handleSetSlideScroll={this._handleSetSlideScroll.bind(this)}
          imageSlide={imageSlide}
          imgNavigate={imgNavigate}
          activeControl={activeControl}
          objectCoordinat={objectCoordinat}
        />
      );
    }
  }
 
  return HocClass;
};

export default HocControl;
