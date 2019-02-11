import { reduxForm } from 'redux-form';
import Company from './component';
import validate from './validate';

export default reduxForm({
  form:'Company',
  validate
})(Company);