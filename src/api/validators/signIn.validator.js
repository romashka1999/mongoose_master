const joi = require('@hapi/joi');

const signInSchema = joi.object({
    accounIdentity: joi.string().required(),
    password: joi.string().required()
});

module.exports = {
    signInSchema
}