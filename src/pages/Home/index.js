import { connect } from 'react-redux';
import Home from './component';

function mapStateToProps(state) {
  return { state, 
    activeMenu:state.Home.activeMenu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);