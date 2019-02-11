import { connect } from 'react-redux';
import Case1 from './component';
import { commonDispatch } from './../../../actions';

function mapStateToProps(state) {
  return {
    state,
    dataRadio:state.Home.dataRadio,
    activeForm:state.Home.activeForm
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
)(Case1);
