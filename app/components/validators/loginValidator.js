import validator from 'validator';

const required = value => (!value.toString().trim().length);

const validEmail = value => (!validator.isEmail(value));

const maxLt = (value, maxLength) => (!value.toString().trim().length > maxLength);

const minLt = (value, minLength) => (!value.toString().trim().length <= minLength);

const loginValidator = (email, password) => {
console.log(email, 'qweqweqwewq qwewqe');
  let emailStatus = true;
  let passwordStatus = true;
  const res = {
    email: '',
    password: ''
  };

  if (required(email) && emailStatus) {
    console.log(email, 'wewqewq');
    emailStatus = false;
    res.email = 'email is required';
  }
  if (validEmail(email) && emailStatus) {
    emailStatus = false;
    res.email = 'email is not valid';
  }
  if (required(password) && passwordStatus) {
    passwordStatus = false;
    res.password = 'password is required';
  }

  if (passwordStatus && emailStatus) {
    return false;
  }
  return res;
};

export default loginValidator;
