const { string, any } = require('joi');
const Joi = require('joi');

const body = {
  username: 'test@gmail.com', password: 'sds', name: '12', age: '23',
};

const auth = {
  username: null,
  password: null,
  age: null,
  name: null,
  ...body,
}

const customWarningFunc = (type) => (value, helper) => {
  if (value) {
    if (typeof (value) != type) {
      helper.warn('any.unknown', { msg: `${helper.state.path[0]} must be ${type}` });
      return
    }
    return value;
  }
  helper.warn('any.unknown', { msg: `${helper.state.path[0]} must be not be empty` });
}


const authSchema = Joi.object()
  .keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.custom(customWarningFunc('string')),
    // age: Joi.custom(customWarningFunc('number')),
    age: Joi.number().min(10).custom(customWarningFunc('number')),
  })
  .options({
    abortEarly: false,
    allowUnknown: false,
  });


const { value, error, warning } = authSchema.validate(auth);

console.log(value)
console.log(warning)
console.log(error)

