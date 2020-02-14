const { Router } = require('express');
const router = new Router();


router.post('/signUp', (req, res, next) => {
    res.status(201).send('created')
});

exports.UserController = router;

