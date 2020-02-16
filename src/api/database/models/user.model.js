const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const { hashPassword, checkPassword } = require('../../helpers/password');
const { generateToken } = require('../../helpers/token');

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
    },
    admin: {
        type: Boolean,
        default: false
    }
});

// Schema.methods.?  ---  instance methods
// Schema.statics.?  ---  Class methods
// Schema.pre  ---  before method
// Schema.post  ---  after method

UserSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = await generateToken(user);
    return token;
}

UserSchema.statics.findByCredentials =  async (acountIdentity, password) => {
    try {
        const user = await User.findOne({email: acountIdentity});
        if (!user) {
            const user = await User.findOne({username: acountIdentity});
            if(!user) {
                throw new ErrorBuilder({}, 'NOT_FOUND', 'DB_ERROR');
            }

            if(! await checkPassword(password, user.password)) {
                throw new ErrorBuilder({}, 'UNAUTHORIZED', 'AUTH_MIDDLEWARE');
            }
            return user;
        }
    } catch (error) {
        throw new ErrorBuilder(error, 'SERVER_INTERNAL_ERROR', 'DB_ERROR');
    }
}

//hash pass before saving
UserSchema.pre('save', async function (next) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await hashPassword(user.password);
    }
    next();
});



const User = model('User', UserSchema);
module.exports = User;