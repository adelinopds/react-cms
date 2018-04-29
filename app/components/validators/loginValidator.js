import validator from 'validator';
import ValidationError from '../../errors/ValidationError';

const required = value => (!value.toString().trim().length);

const validEmail = value => (!validator.isEmail(value));

const maxLt = (value, maxLength) => (!value.toString().trim().length > maxLength);

const minLt = (value, minLength) => (!value.toString().trim().length <= minLength);

const loginValidator = (email, password) => {

  if (required(email)) {
    throw new ValidationError('email', 'is required');
  }

  if (validEmail(email)) {
    throw new ValidationError('email', 'is not valid');
  }

  if (required(password)) {
    throw new ValidationError('password', 'is required');
  }

  return true;
};

export default loginValidator;
