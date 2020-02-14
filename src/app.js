const express = require('express');
const { green } = require('chalk');
const { SERVER_PORT } = require('./config');
const app = express();

require('./api/database/db');

const { UserController } = require('./api/controllers/user.controller');

app.use('/user', UserController);

app.listen(SERVER_PORT, () => {
    console.log(green.bold.inverse(` server listening to the port: ${blue.bold(' '+SERVER_PORT+' ')} `));
})  