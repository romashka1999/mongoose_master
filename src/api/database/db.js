const mongoose =  require('mongoose');
const { red, green, blue } = require('chalk');
const { DATABASE_HOST } = require('../../config');

const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true
}

mongoose.connect(DATABASE_HOST, dbOptions ,(err) => {
    if(err) {
        console.log(red.bold.inverse(` database did not connected: ${green.bold(' '+DATABASE_HOST+' ')} `));
    }
    console.log(green.bold.inverse(` database connected: ${blue.bold(' '+DATABASE_HOST+' ')} `));
});