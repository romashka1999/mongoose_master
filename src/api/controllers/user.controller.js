const { Router } = require('express');
const router = new Router();
const { signUpUser } = require('../services/user.service');
const { requestHandler } = require('../shared/requestHandler');

router.post('/signUp', (req, res, next) => {
    requestHandler(req, res, signUpUser);
});


router.post('/signIn', async (req, res, next) => {

});



exports.UserController = router;

