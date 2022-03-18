/* eslint-disable require-jsdoc */
import Joi from 'joi';

export default async function tripValidation(req, res, next) {
  const tripSchema = Joi.object({
    reason: Joi.string().required().empty().messages({
      'string.base': 'trip Reason must be valid',
      'string.empty': 'trip Reason is not allowed to be empty',
      'any.required': 'trip Reason is required'
    }),
    tripDate: Joi.date().iso().required().empty().messages({
      'date.base': 'tripDate must be valid date',
      'date.empty': 'tripDate is not allowed to be empty',
      'any.required': 'tripDate is required',
      'date.format':
        'tripDate is not correct iso standard must be year-month-day'
    }),
    returnDate: Joi.date().iso().empty().messages({
      'date.base': 'returnDate must be valid',
      'any.required': 'returnDate is required',
      'date.format':
        'returnDate is not correct iso standard must be year-month-day'
    }),
    destination: Joi.string().required().empty().messages({
      'string.base': 'destination must be valid',
      'string.empty': 'destination is not allowed to be empty',
      'any.required': 'destination is required'
    }),
    origin: Joi.string().required().empty().messages({
      'string.base': 'originCity must be valid',
      'string.empty': 'originCity is not allowed to be empty',
      'any.required': 'originCity is required'
    })
  });

  const validate = tripSchema.validate(req.body);

  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message.replace(/["'`]+/g, '')
    });
  }

  next();
}
