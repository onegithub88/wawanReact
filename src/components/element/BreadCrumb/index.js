import { connect } from 'react-redux';
import BreadCrumb from './component';
import { commonDispatch } from './../../../actions';

function mapStateToProps(state) {
  return { state, breadCrumb: state.Home.breadCrumb };
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
)(BreadCrumb);