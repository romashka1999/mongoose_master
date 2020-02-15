const joi = require('@hapi/joi');

const getTaskyIdSchema = joi.object({
    id: joi.string().required()
})

module.exports = {
    getTaskyIdSchema
}