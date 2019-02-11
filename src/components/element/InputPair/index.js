import { connect } from 'react-redux';
import Input from './component';
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
)(Input);