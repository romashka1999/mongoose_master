const { Schema, model } = require('mongoose');

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


module.exports = model('Task', TaskSchema);