const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    company_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: 'name is required'
    },
    text: {
        type: String,
        required: true,
    },
    applied_User:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
});

const model = mongoose.model('jobModel', jobSchema);

module.exports = model;