import { connect } from 'react-redux';
import RadioButton from './component';
import { commonDispatch } from './../../../actions';

function mapStateToProps(state) {
  return { 
    state
  };
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
)(RadioButton);