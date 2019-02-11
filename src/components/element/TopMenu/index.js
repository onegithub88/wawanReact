import { connect } from 'react-redux';
import TopMenu from './component';
import { commonDispatch } from './../../../actions';

function mapStateToProps(state) {
  return { state, dataMenu: state.Home.dataMenu };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    commonDispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);