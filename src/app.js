const express = require('express');
const { green, blue } = require('chalk');
const { SERVER_PORT } = require('./config');
const app = express();
const { json } = require('body-parser');
const cors = require('cors');
const morgan =  require('morgan');


require('./api/database/db');

const { UserController } = require('./api/controllers/user.controller');
const { TaskController } = require('./api/controllers/task.controller');


app.use(cors());
app.use(json());
app.use(morgan('dev'));

app.use('/users', UserController);
app.use('/tasks', TaskController);

app.listen(SERVER_PORT, () => {
    console.log(green.bold.inverse(` server listening to the port: ${blue.bold(' '+SERVER_PORT+' ')} `));
})  