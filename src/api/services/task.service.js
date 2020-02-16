const Task = require('../database/models/task.model');
const { SuccessResponseBuilder, ErrorResponseBuilder } = require('../shared/responseBuilder');
const { paramsIdSchema } = require('../validators/tasks/paramsId.validator');
const { updateTaskByIdSchema } = require('../validators/tasks/paramsId.validator');

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
       const validate =  paramsIdSchema.validate(req.params);
       if(validate.error) {
           throw validate.error
       }
    } catch (error) {
        throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'JOI_ERROR');
    }
    const id = req.params.id;
    try {
        const response = await Task.findById(id);
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

const deleteTaskById = async(req) => {
    try {
        const validate =  paramsIdSchema.validate(req.params);
        if(validate.error) {
            throw validate.error
        }
     } catch (error) {
         throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'JOI_ERROR');
     }
     const id = req.params.id;
     try {
        const response = Task.findOneAndDelete(id);

        if(response) {
            return new SuccessResponseBuilder(response, 'OK');
        } else {
            throw new ErrorResponseBuilder({}, 'NOT_FOUND', 'DB_ERROR');
        }
    } catch (error) {
        console.log(error);
        throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }

}

const updateTaskById = async(req) => {
    try {
        const validate =  paramsIdSchema.validate(req.params);
        if(validate.error) {
            throw validate.error
        }
     } catch (error) {
         throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'JOI_ERROR');
     }

     try {
        const validate =  updateTaskByIdSchema.validate(req.params);
        if(validate.error) {
            throw validate.error
        }
     } catch (error) {
         throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'JOI_ERROR');
     }
    const id = req.params.id;
    try {
        const response = Task.findByIdAndUpdate(id, req.body, {runValidators: true});
        return new SuccessResponseBuilder(response, 'OK');
    } catch (error) {
        console.log(error);
        throw new ErrorResponseBuilder(error, 'BAD_REQUEST', 'DB_ERROR');
    }
}

module.exports = {
    getAllTasks,
    getAllTasksByUserId,
    getTaskById,
    deleteTaskById,
    updateTaskById,
    createTask
}
