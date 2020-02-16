const joi = require('@hapi/joi');

const updateTaskByIdSchema = joi.object({
    id: joi.string().required()
})

module.exports = {
    updateTaskByIdSchema
}