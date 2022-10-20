const mongoose = require('mongoose');

const followCompanySchema = new mongoose.Schema({
    company_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const model = mongoose.model('Follow', followCompanySchema);

module.exports = model;