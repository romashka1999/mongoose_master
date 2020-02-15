const joi = require('@hapi/joi');

const signUpSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
});

module.exports = {
    signUpSchema
}



