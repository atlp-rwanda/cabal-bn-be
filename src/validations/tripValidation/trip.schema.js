/* eslint-disable import/prefer-default-export */
import joi from 'joi';

export const tripSchema = joi.object({
  accomodationId: joi.number().required().empty().messages({
    'integer.base': 'accomodationId must be valid',
    'integer.empty': 'accomodationId is not allowed to be empty',
    'any.required': 'accomodationId is required'
  }),
  reason: joi.string().required().empty().messages({
    'string.base': 'trip Reason must be valid',
    'string.empty': 'trip Reason is not allowed to be empty',
    'any.required': 'trip Reason is required'
  }),
  tripDate: joi.date().iso().required().empty().messages({
    'date.base': 'tripDate must be valid date',
    'date.empty': 'tripDate is not allowed to be empty',
    'any.required': 'tripDate is required',
    'date.format': 'tripDate is not correct iso standard must be year-month-day'
  }),
  returnDate: joi.date().iso().empty().messages({
    'date.base': 'returnDate must be valid',
    'any.required': 'returnDate is required',
    'date.format':
      'returnDate is not correct iso standard must be year-month-day'
  }),
  destination: joi.string().required().empty().messages({
    'string.base': 'destination must be valid',
    'string.empty': 'destination is not allowed to be empty',
    'any.required': 'destination is required'
  }),
  originCity: joi.string().required().empty().messages({
    'string.base': 'originCity must be valid',
    'string.empty': 'originCity is not allowed to be empty',
    'any.required': 'originCity is required'
  }),
  status: joi.string().empty().messages({
    'string.base': ' status must be valid',
    'string.empty': ' status is not allowed to be empty'
  })
});
