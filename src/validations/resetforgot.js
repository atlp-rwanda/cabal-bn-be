import { forgotpassword, resetSchema } from "./forgotSchema/resertSchema";

export const EmailValidation = async(req, res, next) => {
    const value = await forgotpassword.validate(req.body);
    if (value.error) {
        res.json({
            error: 1,
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}
export const PasswordValidation = async(req, res, next) => {
    const value = await resetSchema.validate(req.body);
    if (value.error) {
        res.json({
            error: 1,
            message: value.error.details[0].message
        })
    } else {
        next();
    }
}