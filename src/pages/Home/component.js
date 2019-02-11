import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import TopMenu from './../../components/element/TopMenu';
import BreadCrumb from './../../components/element/BreadCrumb';
import Case1 from './../../components/form/Case1';
import Case2 from './../../components/form/Case2';
import Case3 from './../../components/form/Case3';

export default class Component extends React.Component {
  _renderChoiseMenu(activeMenu){
    switch(activeMenu){
      case 1:
        return (
          <Case1   
            handleSubmitPerson={this._handleSubmitPerson.bind(this)} 
            handleSubmitCompany={this._handleSubmitCompany.bind(this)}
          />
        );
      case 2:
        return <Case2/>;
      case 3:
        return <Case3/>;
      default: return <Case1 />;
    }
  }
  _handleSubmitPerson(){
    alert('Data Person Ok');
  }
  _handleSubmitCompany(){
    alert('Data Company Ok');
  }
  render() {
    const { activeMenu } = this.props;

    return (
      <div className="container">
        <TopMenu />
        <BreadCrumb/>
        {this._renderChoiseMenu(activeMenu)}
      </div>
    );
  }
}

Component.propTypes = {
  activeMenu:PropTypes.number
};