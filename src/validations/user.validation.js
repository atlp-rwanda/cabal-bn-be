import Joi from 'joi';

// const userSchema = Joi.object({
// 	first_name: Joi.string().empty(),
// 	last_name: Joi.string().empty(),
// 	username: Joi.string().empty(),
// 	password: Joi.string()
// 		.required()
// 		.empty()
// 		.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#*&]+)[\w@#*&]{8,}$/)
// 		.messages({
// 			'any.required': '{{#label}} field is required',
// 			'string.base': '{{#label}} must be of type string',
// 			'string.empty': '{{#label}} can not be empty',
// 			'string.pattern.base':
// 				'{{#label}} must contain atleast a number, upper-case letter and longer than 8 characters',
// 		}),
// 	email: Joi.string().required().email(),
// 	language: Joi.string().empty(),
// 	address: Joi.string().empty(),
// 	profile_picture: Joi.string().empty(),
// 	occupation: Joi.string().empty(),
// 	bio: Joi.string().empty(),
// 	nationality: Joi.string().empty(),
// });

const userValidation = (req, res, next) => {
    const userSchema = Joi.object({
        first_name: Joi.string().empty(),
        last_name: Joi.string().empty(),
        username: Joi.string().empty(),
        password: Joi.string()
            .required()
            .empty()
            .pattern(/^(?=.*[A-Z])(?=.*[0-9])\w{8,}$/)
            .messages({
                'any.required': '{{#label}} field is required',
                'string.base': '{{#label}} must be of type string',
                'string.empty': '{{#label}} can not be empty',
                'string.pattern.base': '{{#label}} must contain atleast a number, upper-case letter and longer than 8 characters'
            }),
        email: Joi.string().required().email(),
        language: Joi.string().empty(),
        address: Joi.string().empty(),
        profile_picture: Joi.string().empty(),
        occupation: Joi.string().empty(),
        bio: Joi.string().empty(),
        nationality: Joi.string().empty()
    });

    const result = userSchema.validate(req.body);
    if (result.error) {
        res.status(400).json({
            message: result.error.details[0].message.replace(/["'`]+/g, '')
        });
    } else {
        next();
    }
};

export default userValidation;