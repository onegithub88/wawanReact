import { reduxForm } from 'redux-form';
import Person from './component';
import validate from './validate';

export default reduxForm({
  form:'Person',
  validate
})(Person);