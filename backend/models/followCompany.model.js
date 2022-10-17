const mongoose = require('mongoose');

exports.followCompanySchema = mongoose.Schema({
    user_id:{
        type:integer,
        required:true,
    },
    company_id:{
        type:integer,
        required:true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const model = mongoose.model('Follow', followCompanySchema);

module.exports = model;