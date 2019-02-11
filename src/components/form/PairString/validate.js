import validatePairString from './PairStringFunc';

const validate = values => {
  const {
    string1,
    string2
  } = values;
  const errors = {
    string1: validatePairString(string1,string2,'string1'),
    string2: validatePairString(string1,string2,'string2')
  };
  return errors;
};

export default validate;