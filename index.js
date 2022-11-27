const { string, any } = require('joi');
const Joi = require('joi');

//This is the object we will be getting from DB/Client
const auth = {
  username: 'test@gmail.com', password: 'sds', name: '12', age: '23', phone: '22', city: '12',
};

const authSchema = Joi.object()
  .keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string(),
    age: Joi.number().min(18),
    phone: Joi.number(),
    country: Joi.string(),
    gender: Joi.string(),
    hobbies: Joi.string(),
    city: Joi.string(),
    gos: Joi.string(),
  })
  .options({
    abortEarly: false,
    allowUnknown: false,
  }).custom((value, helper) => { //just have to attach this functions
    const undefinedKeys = [];
    const schemaKeys = helper.schema.$_terms.keys;
    schemaKeys.map((schemaKey) => {
      if (!value[schemaKey.key]) {
        undefinedKeys.push(schemaKey.key);
      }
    })
    helper.warn('any.unknown', { msg: 'Values Required', value: undefinedKeys })
  }, "Warn on undefined keys");


const { value, error, warning } = authSchema.validate(auth);
console.log("error", error);
console.log("warning", warning.details[0].context);