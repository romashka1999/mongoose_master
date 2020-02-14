const joi = require('@hapi/joi');

const signUpSchema = joi.object({
    firstName: joi.min(1).max(255).require(),
    lastName: joi.string().min(1).max(255).required(),
    username: joi.string().min(1).max(20).required(),
    email: joi.required().min(1).max(255).email().required(),
    password: joi.string().min(1).required()
});

module.exports = {
    signUpSchema
}



