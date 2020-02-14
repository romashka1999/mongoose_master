const { signUpSchema } = require('../validators/signUp.validator');
const User = require('../database/models/user.model');
const { SuccessBuilder, ErrorBuilder } = require('../shared/responseBuilder');

const signUpUser = async(req) => {
    try {
        await signUpSchema.validate(req.body);
    } catch (error) {
        throw new ErrorBuilder(error, 'BAD_REQUEST', 'VALIDATION_ERROR');
    }

    try {
        const response = await User.create(body);
        return new SuccessBuilder(response, 'CREATED');
    } catch (err) {
        throw new ErrorBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }
}

module.exports = {
    signUpUser
}