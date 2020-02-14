const { Schema, Model } = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: false,
        default: this.firstName + ' ' + this.lastName
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        validate(val) {
            if(!isEmail(val)) {
                throw new Error('please set appropriate email')
            }
        }
    },
    password: {
        type: String,
        required: true
    }
});



module.exports = Model('User', UserSchema);