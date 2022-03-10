import joi from '@hapi/joi'

export const forgotpassword = joi.object({
    email: joi.string().email().required(),

})
export const resetSchema = joi.object({
    password: joi.string().min(8).max(16).pattern(new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)).message("Password must atleast have special character and a number").required()
})