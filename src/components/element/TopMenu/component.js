import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Const from './../../../const';

export default class Component extends React.Component {
  _handleChangeMenu(id){
    const { dispatch, commonDispatch } = this.props;

    return ()=>{
      commonDispatch(dispatch,{ id:id }, Const.CHANGE_MENU);
    };
  }
  _renderItemMenu(){
    const { dataMenu } =  this.props;
    if (!dataMenu) return null;

    return (
      <React.Fragment>
        {dataMenu.map((menu,i)=>(
          <div onClick={this._handleChangeMenu(menu.id)} key={i} className={['fRow menuItem mr10 smBold ',menu.active ? 'menuItemActive' :''].join(' ')}>
            <span>{menu.name}</span>
          </div>
        ))}
      </React.Fragment>
    );
  }
  render() {
    return (
      <div className="fRow topMenu fjCenter">
        {this._renderItemMenu()}
      </div>
    );
  }
}

Component.propTypes = {
  data: PropTypes.array,
  dispatch:PropTypes.func,
  commonDispatch:PropTypes.func,
  dataMenu:PropTypes.array
};