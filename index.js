const { string, any } = require('joi');
const Joi = require('joi');

//This is the object we will be getting from DB/Client
const auth = {
  username: 'test@gmail.com', password: 'sds', name: '12', age: '23', phone: true
};

//This will be our current Validation - Don't have to change anything
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
  })
  .options({
    abortEarly: false,
    allowUnknown: false,
  });


const { value, error } = authSchema.validate(auth);

//If error found, we will not go to the next MD. 
console.log(error);


//Here our Current MD end for Validation and we have an Object which passed our First Validation Check 

//We Start our 2nd MD here to get warning for the OptionalFields() - It will be a seperate file and called after the first MD

//This object will contain all the fields with null values
//The Body will now again go into this check -> This will only give warning for the fields which are not present
const auth2 = {
  username: null,
  password: null,
  age: null,
  name: null,
  gender: null,
  country: null,
  hobbies: null,
  city: null,
  phone: null,
  ...value //combining the object here
}

const customWarningFunc = (value, helper) => {
  if (value) return value;
  helper.warn('any.unknown', { msg: `${helper.state.path[0]} must be not be empty` });
}

//In this validation every field must have a customfunc attached
const authSchema2 = Joi.object()
  .keys({
    username: Joi.custom(customWarningFunc),
    password: Joi.custom(customWarningFunc),
    name: Joi.custom(customWarningFunc),
    age: Joi.custom(customWarningFunc),
    gender: Joi.custom(customWarningFunc),
    country: Joi.custom(customWarningFunc),
    hobbies: Joi.custom(customWarningFunc),
    city: Joi.custom(customWarningFunc),
    phone: Joi.custom(customWarningFunc),
  }).options({
    abortEarly: false,
    allowUnknown: false,
  });


const { warning } = authSchema2.validate(auth2);

//Here we have the warnings now, we can store them in a seperate object or do whatever we want to do with them
console.log(warning)








