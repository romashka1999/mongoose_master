const { Router } = require('express');
const router = new Router();
const { signUpUser, signInUser, getAllUsers, getUserById, deleteUserById, updateUserById } = require('../services/user.service');
const { requestHandler } = require('../shared/requestHandler');

router.get('/', async (req, res, next) => {
    requestHandler(req, res, getAllUsers);
});

router.post('/:id', async (req, res, next) => {
    requestHandler(req, res, getUserById);
});

router.post('/signUp', (req, res, next) => {
    requestHandler(req, res, signUpUser);
});


router.post('/signIn', async (req, res, next) => {
    requestHandler(req, res, signInUser);
});

router.put('/:id', async (req, res, next) => {
    requestHandler(req, res, updateUserById);
});

router.delete('/:id', async (req, res, next) => {
    requestHandler(req, res, deleteUserById);
});



exports.UserController = router;

