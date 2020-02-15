const Task = require('../database/models/task.model');
const { SuccessResponseBuilder, ErrorResponseBuilder } = require('../shared/responseBuilder');
const { getTaskyIdSchema } = require('../validators/tasks/getTaskById.validator');

const getAllTasks = async(req) => {
    try {
        const response = await Task.find();
        return new SuccessResponseBuilder(response, 'OK');
    } catch (error) {
        throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }
}

const createTask = async(req) => {
    const task = new Task(req.body);
    try {
        const response = await task.save();
        return new SuccessResponseBuilder(response, 'CREATED');
    } catch (error) {
        throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }
}

const getAllTasksByUserId = async(req) => {
}

const getTaskById = async(req) => {
    try {
       const validate =  getTaskyIdSchema.validate(req.params);
       if(validate.error) {
           throw validate.error
       }
    } catch (error) {
        throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'JOI_ERROR');
    }
    const id = req.params.id;
    try {
        const response = await Task.findById(id);
        return new SuccessResponseBuilder(response, 'OK');
    } catch (error) {
        throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }
}

const deleteTaskById = async(req) => {

}

const updateTaskById = async(req) => {

}

module.exports = {
    getAllTasks,
    getAllTasksByUserId,
    getTaskById,
    deleteTaskById,
    updateTaskById,
    createTask
}
