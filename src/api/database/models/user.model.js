const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new Schema({
    firstName: {
        type: String,
        maxlength: [255, 'Too large firstname'],
        required: false,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
        lowercase: true
    },
    fullName: {
        type: String,
        required: function() {
            return (this.firstName && this.lastName) ? false : true;
        },
        default: function() {
            if(!this.required) {
                return this.firstName + ' ' + this.lastName
            }  
        }
    },
    username: {
        type: String,
        required: [true, 'Why no username?'],
        match: '/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/',
        unique: true
    },
    email: {
        type: String,
        unique: true,
        validate(val) {
            if(!isEmail(val)) {
                throw new Error('please set appropriate email')
            }
        },
        required: function() {
            return this.username ? false : true;
        }
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if(value<0) {
                throw new Error('Age must be a postitive number');
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    accountStatus: {
        type: String,
        enum: ['VERIFIED', 'VERIFICATION_PENDING', 'UNVERIFIED'],
        default: 'UNVERIFIED'
    }
});

UserSchema.statics.findByCredentials =  async (acountIdentity, password) => {
    // const 
    // try {
    //     const user = awa
    // } catch (error) {
    //     throw new ErrorBuilder(error, 'SERVER_INTERNAL_ERROR', 'DB_ERROR');
    // }
}



module.exports = model('User', UserSchema);