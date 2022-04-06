/* eslint-disable require-jsdoc */
import Joi from 'joi';

export default async function tripValidation(req, res, next) {
    const tripSchema = Joi.object({
        reason: Joi.string().required().empty().messages({
            'string.base': 'trip Reason must be valid',
            'string.empty': 'trip Reason is not allowed to be empty',
            'any.required': 'trip Reason is required'
        }),
        tripDate: Joi.date().iso().min(new Date()).required().empty().messages({
            'date.base': 'tripDate must be valid date',
            'date.empty': 'tripDate is not allowed to be empty',
            'date.min':'trip date is out dated',
            'any.required': 'tripDate is required',
            'date.format': 'tripDate is not correct iso standard must be year-month-day'
        }),
        returnDate: Joi.date().iso().min(new Date()).empty().messages({
            'date.base': 'returnDate must be valid',
            'date.min':'return date is out dated',
            'any.required': 'returnDate is required',
            'date.format': 'returnDate is not correct iso standard must be year-month-day'
        }),
        arrival_location_id: Joi.number().required().empty().messages({
            'string.base': 'arrival_location_id must be valid',
            'string.empty': 'arrival_location_id is not allowed to be empty',
            'any.required': 'arrival_location_id is required'
        }),
        depart_location_id: Joi.number().required().empty().messages({
            'string.base': 'depart_location_id must be valid',
            'string.empty': 'depart_location_id is not allowed to be empty',
            'any.required': 'depart_location_id is required'
        }),
        accommodation_id: Joi.number().required().empty().messages({
            'string.base': 'accommodation_id must be valid',
            'string.empty': 'accommodation_id is not allowed to be empty',
            'any.required': 'accommodation_id is required'
        }),
    });

    const validate = tripSchema.validate(req.body);

    if (validate.error) {
        return res.status(400).json({
            message: validate.error.details[0].message.replace(/arrival|location|[023456789]|[_.[\]"'`]+/g, '')
        });
    }

    next();
}

export const changestatusValidation = async(req, res, next) => {
    const RequestSchema = Joi.object({
        status: Joi.string().required().valid('APPROVED', 'REJECTED'),
    });
    const validate = RequestSchema.validate(req.body);

    if (validate.error) {
        return res.status(400).json({
            message: validate.error.details[0].message.replace(/["'`]+/g, '')
        });
    }
    next();
}