import { REGEX } from './../../actions';


export default function validateInput(value, rules, field='') {
  let message = '';

  for (let idx = 0; idx < rules.length; idx++) {
    if (rules[idx] == 'required' && !value) {
      message = `${field} can't be empty`;
      break;
    } else if (rules[idx] == 'name' && value.length > 0) {
      let stringCheck = REGEX.NAME_VALIDATE(value);
      if (!stringCheck) {
        message = 'Name not valid !';
      }
      break;
    } else if (rules[idx] == 'max-64' && value.length > 64) {
      message = 'Must be 64 characters or less';
      break;
    } else if (rules[idx]=='email' && value.length > 0) {
      let stringCheck = REGEX.EMAIL_VALIDATE(value);
      if (!stringCheck) {
        message = 'Email Tidak Valid !';
      }
    } else if (rules[idx]=='phone' && value.length > 0) {
      let stringCheck = REGEX.NUMBER_VALIDATE(value);
      if (!stringCheck) {
        message = 'Nomor Tidak Valid !';
      }
    }else if (rules[idx] == 'min-6' && value.length < 6) {
      message = 'Must be minimum 6 digit';
      break;
    }else if (rules[idx] == 'max-14' && value.length > 14) {
      message = 'Must be 14 characters or less';
      break;
    }
  }

  return message;
}