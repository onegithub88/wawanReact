import { connect } from 'react-redux';
import Button from './component';
import { commonDispatch } from './../../../actions';

function mapStateToProps(state) {
  return { state };
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
)(Button);