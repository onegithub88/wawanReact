import validateInput from './../validateInput';

const validate = values => {
  const {
    companyName,
    companyPhone
  } = values;
  const errors = {
    companyName: validateInput(companyName, ['required'],'Company Name'),
    companyPhone :validateInput(companyPhone, ['required','phone','min-6','max-14'],'Company Phone')
  };
  return errors;
};

export default validate;