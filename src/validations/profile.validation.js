import Joi from "joi";

const profileValidation = (req, res, next) => {
    const profileSchema = Joi.object({
        first_name: Joi.string().empty(),
        last_name: Joi.string().empty(),
        date_of_birth: Joi.date().iso().empty(),
        occupation: Joi.string().empty(),
        nationality: Joi.string().empty(),
        bio: Joi.string().empty(),
        gender: Joi.string().empty(),
        age: Joi.number().empty(),
        language: Joi.string().empty(),
        location_id: Joi.number().empty(),
    })

    const validating = profileSchema.validate(req.body)
    if(validating.error) {
        res.status(400).json({
            message: validating.error.details[0].message.replace(/["'`]+/g, '')
        });
    }
    else {
        next()
    }
}

export default profileValidation
