import validateInput from './../validateInput';

const validate = values => {
  const {
    firstName,
    lastName,
    email
  } = values;
  const errors = {
    firstName: validateInput(firstName, ['required','name'],'First name'),
    lastName: validateInput(lastName, ['required','name'],'Last name'),
    email :validateInput(email, ['required','email','max-64'])
  };
  return errors;
};

export default validate;