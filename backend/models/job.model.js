const mongoose = require('mongoose');

exports.jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: 'name is required'
    },
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const model = mongoose.model('Job', jobSchema);

module.exports = model;