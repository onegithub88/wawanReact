import { connect } from 'react-redux';
import Case2 from './component';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Case2);