const joi = require('@hapi/joi');

const createSchema = joi.object({
    title: joi.string().min(1).max(20).required(),
    description: joi.string().min(1).max(255).required()
});

module.exports = {
    createSchema
}