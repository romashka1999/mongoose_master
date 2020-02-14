const { Schema, Model } = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    timestamps: true
});


module.exports = Model('Task', TaskSchema);