import React from 'react';
import PropTypes from 'prop-types';
import Control1 from './../Control1';
import Control2 from './../Control2';
import Display from './../Display';


import './styles.css';

export default class Component extends React.Component {
  
  render() {
    return(
      <div className={`fColumn formContainer pd10 mt10 bgWhite rad10 shadow5`}>
        <div className="fCol formHOC fjCenter faCenter fullWidth mt20 mb15">
          <label className="md3label mdBold mb10">Hight Order Component (HOC)</label>
          <label className="mdlabel smBold fJustify mb20 ln1-5 ">
            {`HOC adalah Suatu Metode di dalam React yang memungkinkan kita
            untuk Meneruskan atau mewariskna sgala metode, state dan props kepada Component
            yang di teruskan melalui variable fungsi HOC sehingga kita 
            tidak perlu membuat metode/props yang sama
            di dalam component yang di passing melalui fungsi/
            class HOC tampa harus mengurangi menghilangkan
            sgala attribut class component tersebut.
           `}
          </label>
          <label className="md3label mdBold mb25">Contoh Penggunaan (HOC)</label>
          <div className="fCol fullWdith boxHoxExample">
            <div className="fRow fullWdith">
              <Display/>
            </div>
            <div className="fRow fullWdith fjStart faStart">
              <Control1 />
              <Control2 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  data: PropTypes.array
};