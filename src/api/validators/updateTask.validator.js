const joi = require('@hapi/joi');

const updateSchema = joi.object({
    completed: joi.boolean().required()
});

module.exports = {
    updateSchema
}