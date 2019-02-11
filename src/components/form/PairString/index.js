import { reduxForm } from 'redux-form';
import PairString from './component';
import validate from './validate';

export default reduxForm({
  form:'PairString',
  validate
})(PairString);