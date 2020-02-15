const { Router } = require('express');
const router = new Router();
const { getAllTasks, getAllTasksByUserId, getTaskById, updateTaskById, deleteTaskById, createTask } = require('../services/task.service');
const { requestHandler } = require('../shared/requestHandler');

router.get('/', (req, res, next) => {
    requestHandler(req, res, getAllTasks);
});

router.get('/:id', (req, res, next) => {
    requestHandler(req, res, getTaskById);
});

router.get('/:userId', (req, res, next) => {
    requestHandler(req, res, getAllTasksByUserId);
});

router.post('/', (req, res, next) => {
    requestHandler(req, res, createTask);
});

router.patch('/:id', (req, res, next) => {
    requestHandler(req, res, updateTaskById);
});

router.delete('/:id', (req, res, next) => {
    requestHandler(req, res, deleteTaskById);
});

exports.TaskController = router;





