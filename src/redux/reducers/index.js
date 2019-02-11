import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import Home from './Home';

export default combineReducers({
  Home,
  form:formReducer
})
