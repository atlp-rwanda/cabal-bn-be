import Joi from 'joi';

const userSchema = Joi.object({
	first_name: Joi.string().empty(),
	last_name: Joi.string().empty(),
	username: Joi.string().empty(),
	password: Joi.string()
		.required()
		.empty()
		.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#*&]+)[\w@#*&]{8,}$/)
		.messages({
			'any.required': '{{#label}} field is required',
			'string.base': '{{#label}} must be of type string',
			'string.empty': '{{#label}} can not be empty',
			'string.pattern.base':
				'{{#label}} must contain atleast a number, upper-case letter and longer than 8 characters',
		}),
	email: Joi.string().required().email(),
	language: Joi.string().empty(),
	address: Joi.string().empty(),
	profile_picture: Joi.string().empty(),
	occupation: Joi.string().empty(),
	bio: Joi.string().empty(),
	nationality: Joi.string().empty(),
});

const userValidation = (req, res, next) => {
	try {
		const value = userSchema.validate(req.body);
		if (value.error) {
			res.status(406).json({
				message: value.error.details[0].message.replace(/["'`]+/g, ''),
			});
		} else {
			next();
		}
	} catch (error) {
		res.status(500).json({
			message:
				error.message ||
				error.message.replace(/["'`]+/g, '') ||
				'unexpected error occurred',
		});
	}
};

export default userValidation;
