const Joi = require('joi');

const auth = { username: 'test@gmail.com', password: '1234' };

const authSchema = Joi.object()
  .keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  })
  .options({
    abortEarly: false,
    allowUnknown: false,
  });

const { error, warning, value } = authSchema.validate(auth);

console.log(error, warning, value);
