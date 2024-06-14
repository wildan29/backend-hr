// Create validation with Joi
// learn more about it in the docs: https://joi.dev/api/?v=17.9.1

// TODO 4 : Create Validation
import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().max(255).required(),
  email: Joi.string().max(255).required(),
});

const loginUserValidation = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().max(255).required(),
});

const userValidation = Joi.string().max(60).required();

export { registerUserValidation, loginUserValidation };
