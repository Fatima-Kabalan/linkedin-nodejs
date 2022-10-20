const mongoose = require('mongoose');

exports.jobSchema = mongoose.Schema({
    user_id:{
        type:integer,
        required:true,
    },
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

const model = mongoose.model('Job', jobSchema);

module.exports = model;