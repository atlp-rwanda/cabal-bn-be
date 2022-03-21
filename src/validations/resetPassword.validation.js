/* eslint-disable prefer-regex-literals */
import joi from '@hapi/joi';

export const EmailValidation = async (req, res, next) => {
  const value = await joi
    .object({
      email: joi.string().email().required()
    })
    .validate(req.body);
  if (value.error) {
    res.json({
      error: 1,
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};
export const PasswordValidation = async (req, res, next) => {
  const value = await joi
    .object({
      password: joi
        .string()
        .min(8)
        .max(16)
        .pattern(new RegExp(/^(?=.*[A-Z])(?=.*[0-9])\w{8,}$/))
        .message('Password must atleast have special character and a number')
        .required()
    })
    .validate(req.body);
  if (value.error) {
    res.status(400).json({
      error: 1,
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};
