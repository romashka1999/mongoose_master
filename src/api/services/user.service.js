const User = require('../database/models/user.model');
const { SuccessBuilder, ErrorBuilder } = require('../shared/responseBuilder');

const signUpUser = async(req) => {
    const user = new User(req.body);
    try {
        const response = await user.save();
        return new SuccessBuilder(response, 'CREATED');
    } catch (error) {
        throw new ErrorBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }
}

const signInUser = async(req) => {
    try {
        const user = await User.findByCredentials(req.accountIdentity, req.password);
        const token = await user.generateAuthToken();
        user.token = token;
        return new SuccessBuilder(user, 'CREATED');
    } catch (error) {
        throw new ErrorBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }
}

const getAllUsers = async(req) => {
    try {
        const response = await User.find();
        return new SuccessBuilder(response, 'OK');
    } catch (error) {
        throw new ErrorResponseBuilder({}, 'NOT_FOUND', 'DB_ERROR');
    }
}

const getUserById = async(req) => {
    const id = req.params.id;
    try {
        const response = await User.findById(id);
        if(response) {
            return new SuccessResponseBuilder(response, 'OK');
        } else {
            throw new ErrorResponseBuilder({}, 'NOT_FOUND', 'DB_ERROR');
        }
    } catch (error) {
        if(error instanceof ErrorResponseBuilder) {
            throw error;
        } else {
            throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
        }
    }
}

const deleteUserById = async(req) => {
    try {
        const response = await User.deleteOne();
        return new SuccessBuilder(response, 'OK');
    } catch (error) {
        throw new ErrorResponseBuilder({}, 'NOT_FOUND', 'DB_ERROR');
    }
}

const updateUserById = async(req) => {

}



module.exports = {
    signUpUser,
    signInUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}