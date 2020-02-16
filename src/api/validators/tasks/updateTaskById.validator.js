const joi = require('@hapi/joi');

const updateTaskyIdSchema = joi.object({
    completed: joi.boolean().required()
})

module.exports = {
    updateTaskyIdSchema
}