import Joi from "joi"

export const userSchema = Joi.object({
        name: Joi.string().required().max(400),
        email: Joi.string().required().max(400),
        password: Joi.string().required().max(400).min(6)
    })

export const userSignInSchema = Joi.object({
    email: Joi.string().required().max(400),
    password: Joi.string().required().max(400)
})