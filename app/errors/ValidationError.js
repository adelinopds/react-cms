export default class ValidationError extends Error {

  type = '';

  constructor(type, ...rest) {
    super(...rest);

    this.type = type;
  }
}
