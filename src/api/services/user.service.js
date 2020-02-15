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
        const response = await User.create(body);
        return new SuccessBuilder(response, 'CREATED');
    } catch (error) {
        throw new ErrorBuilder(error, 'SERVER_INTERNAL_ERROR', 'DB_ERROR');
    }
}

const getAllUsers = async(req) => {

}

const getUserById = async(req) => {

}

const deleteUserById = async(req) => {

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